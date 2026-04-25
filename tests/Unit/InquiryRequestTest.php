<?php

namespace Tests\Unit;

use App\Http\Requests\InquiryRequest;
use Tests\TestCase;

class InquiryRequestTest extends TestCase
{
    public function test_valid_name()
    {
        $this->assertTrue($this->validateField('name', str_repeat('a', 45)));
        $this->assertTrue($this->validateField('name', str_repeat('a', 44)));
        $this->assertTrue($this->validateField('name', 'abcdefghijklmnopqrstuvwxyz`1234567890-=~_+[]'));
    }

    protected function validateField(string $field, $value): bool
    {
        return $this->validator->make(
            [$field => $value],
            [$field => $this->rules[$field]]
        )->passes();
    }

    public function test_invalid_name()
    {
        $this->assertFalse($this->validateField('name', str_repeat('a', 46)));
        $this->assertFalse($this->validateField('name', 1));
        $this->assertFalse($this->validateField('name', ''));
    }

    public function test_valid_email()
    {
        $this->assertTrue($this->validateField('email', 'example@example.'.str_repeat('a', 34)));
        $this->assertTrue($this->validateField('email', 'example@example'));
    }

    public function test_invalid_email()
    {
        $this->assertFalse($this->validateField('email', 'example@example.'.str_repeat('a', 35)));
        $this->assertFalse($this->validateField('email', 'invalid...invalid'));
        $this->assertFalse($this->validateField('email', 'invalid...invalid'));
        $this->assertFalse($this->validateField('email', 'invalid'));
        $this->assertFalse($this->validateField('email', ''));
    }

    public function test_valid_subject()
    {
        $this->assertTrue($this->validateField('subject', str_repeat('a', 100)));
        $this->assertTrue($this->validateField('subject', 'Test subject'));
    }

    public function test_invalid_subject()
    {
        $this->assertFalse($this->validateField('subject', str_repeat('a', 101)));
        $this->assertFalse($this->validateField('subject', ''));
        $this->assertFalse($this->validateField('subject', 101));
    }

    public function test_valid_message()
    {
        $this->assertTrue($this->validateField('message', str_repeat('a', 1500)));
        $this->assertTrue($this->validateField('message', 'Test subject'));
    }

    public function test_invalid_message()
    {
        $this->assertFalse($this->validateField('subject', str_repeat('a', 1501)));
        $this->assertFalse($this->validateField('subject', ''));
        $this->assertFalse($this->validateField('subject', 1501));
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->rules = (new InquiryRequest)->rules();
        $this->validator = $this->app['validator'];
    }
}
