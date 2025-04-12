<?php

namespace Tests\Feature;

use Tests\TestCase;

class ContactFormTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_required_body(): void
    {
        $response = $this->post(route("contact"));

        $response->assertSessionHasErrors(["name", "email", "subject", "message"]);
    }

    public function test_required_name()
    {
        $response = $this->post(route("contact"), [
            "email" => "test@invalid.com",
            "subject" => "Test Subject",
            "message" => "Test Message"
        ]);

        $response->assertSessionHasErrors(["name"]);
    }

    public function test_max_name()
    {
        $response = $this->post(route("contact"), [
            "name" => str_repeat("a", 300),
            "email" => "test@invalid.com",
            "subject" => "Test Subject",
            "message" => "Test Message"
        ]);

        $response->assertSessionHasErrors(["name"]);
    }

    public function test_name_datatype()
    {
        $response = $this->post(route("contact"), [
            "name" => 1,
            "email" => "test@invalid.com",
            "subject" => "Test Subject",
            "message" => "Test Message"
        ]);

        $response->assertSessionHasErrors(["name"]);
    }

    public function test_required_email()
    {
        $response = $this->post(route("contact"), [
            "name" => "Test Name",
            "subject" => "Test Subject",
            "message" => "Test Message"
        ]);

        $response->assertSessionHasErrors(["email"]);
    }

    public function test_email_format()
    {
        $response = $this->post(route("contact"), [
            "name" => "Test Name",
            "email" => 1,
            "subject" => "Test Subject",
            "message" => "Test Message"
        ]);

        $response->assertSessionHasErrors(["email"]);
    }

    public function test_email_max()
    {
        $response = $this->post(route("contact"), [
            "name" => "Test Name",
            "email" => str_repeat("a", 300) . "@invalid.com",
            "subject" => "Test Subject",
            "message" => "Test Message"
        ]);

        $response->assertSessionHasErrors(["email"]);
    }

    public function test_required_subject()
    {
        $response = $this->post(route("contact"), [
            "name" => "Test Name",
            "email" => "test@invalid.com",
            "message" => "Test Message"
        ]);

        $response->assertSessionHasErrors(["subject"]);
    }

    public function test_subject_datatype()
    {
        $response = $this->post(route("contact"), [
            "name" => "Test Name",
            "email" => "test@invalid.com",
            "subject" => 1,
            "message" => "Test Message"
        ]);

        $response->assertSessionHasErrors(["subject"]);
    }

    public function test_subject_max() {
        $response = $this -> post(route("contact"),[
            "name" => "Test Name",
            "email" => "test@invalid.com",
            "subject" => str_repeat("a", 300),
            "message" => "Test Message"
        ]);

        $response->assertSessionHasErrors(["subject"]);
    }

    public function test_required_message()
    {
        $response = $this->post(route("contact"), [
            "name" => "Test Name",
            "email" => "test@invalid.com",
            "subject" => "Test Subject"
        ]);

        $response->assertSessionHasErrors(["message"]);
    }

    public function test_message_datatype()
    {
        $response = $this->post(route("contact"), [
            "name" => "Test Name",
            "email" => "test@invalid.com",
            "subject" => "Test Subject",
            "message" => 1
        ]);

        $response->assertSessionHasErrors(["message"]);
    }

    public function test_message_max() {
        $response = $this -> post(route("contact"),[
            "name" => "Test Name",
            "email" => "test@invalid.com",
            "subject" => "Test Subject",
            "message" => str_repeat("a", 300)
        ]);

        $response->assertSessionHasErrors(["message"]);
    }
}
