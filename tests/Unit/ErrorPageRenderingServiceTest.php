<?php

namespace Tests\Unit;

use App\Services\ErrorPageRenderingService;
use Tests\TestCase;

class ErrorPageRenderingServiceTest extends TestCase
{
    private mixed $pageData;

    private mixed $invalidPageData;

    protected function setUp(): void
    {
        parent::setUp();
        $service = new ErrorPageRenderingService;
        $this->pageData = $service->getPageData(404);
        $this->invalidPageData = $service->getPageData(10000);
    }

    public function test_page_data_is_array()
    {
        $this->assertIsArray($this->pageData);
    }

    public function test_invalid_page_data_is_string()
    {
        $this->assertIsString($this->invalidPageData);
        $this->assertIsNotArray($this->invalidPageData);
    }

    public function test_get_title()
    {
        $title = $this->pageData['title'];
        $this->assertNotEmpty($title);
        $this->assertIsString($title);
    }

    public function test_get_description()
    {
        $description = $this->pageData['description'];
        $this->assertNotEmpty($description);
        $this->assertIsString($description);
    }

    public function test_get_brain_fuck()
    {
        $brain_fuck = $this->pageData['brain_fuck'];
        $this->assertNotEmpty($brain_fuck);
        $this->assertIsString($brain_fuck);
    }

    public function test_get_bf_output()
    {
        $bf_output = $this->pageData['bf_output'];
        $this->assertNotEmpty($bf_output);
        $this->assertIsString($bf_output);
    }

    public function test_get_status_code()
    {
        $status_code = $this->pageData['status_code'];
        $this->assertNotEmpty($status_code);
        $this->assertIsNumeric($status_code);
        $this->assertEquals(404, $status_code);
    }

    public function test_get_show_route()
    {
        $show_route = $this->pageData['show_route'];
        $this->assertNotEmpty($show_route);
        $this->assertIsBool($show_route);
        $this->assertTrue($show_route);
    }
}
