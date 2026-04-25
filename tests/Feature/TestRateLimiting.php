<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Redis;
use Tests\TestCase;

class TestRateLimiting extends TestCase
{
    private array $data;

    private array $header;

    public function test_contact_inquiry_throttle()
    {
        Redis::flushAll();
        $limit = 3;

        for ($i = 0; $i < $limit; $i++) {
            $response = $this->post(route('submit.inquiry'), $this->data)->withHeaders($this->header);
            $status = $response->status();
            if ($i < $limit - 1) {
                $this->assertEquals(302, $status);

                continue;
            }
            $this->assertEquals(429, $status);
        }
    }

    protected function setUp(): void
    {
        parent::setUp();
        $this->data = [
            'name' => 'Name',
            'email' => 'email@example.com',
            'subject' => 'subject',
            'message' => 'message',
        ];

        $this->header = ['X-CSRF-TOKEN' => csrf_token()];
    }
}
