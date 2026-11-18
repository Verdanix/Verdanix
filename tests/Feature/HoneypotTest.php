<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Redis;
use Tests\TestCase;

class HoneypotTest extends TestCase
{
    private readonly array $data;

    protected function setUp(): void
    {
        parent::setUp();
        Redis::flushall();
        config()->set('honeypot.randomize_name_field_name', false);
        $this->data = [
            'name' => 'Name',
            'email' => 'email@example.com',
            'subject' => 'subject',
            'message' => 'message',
        ];

        Redis::flushAll();
    }

    /**
     * A basic feature test example.
     */
    public function test_honeypot_catch(): void
    {
        $response = $this->post(route('submit.inquiry'), array_merge($this->data, ['my_name' => 'INVALID']));
        $response->assertStatus(429);
    }

    public function test_successful_submission(): void
    {
        $response = $this->post(route('submit.inquiry'), array_merge($this->data));
        $response->assertStatus(302);
    }
}
