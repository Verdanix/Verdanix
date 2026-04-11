<?php

namespace Tests\Feature;

use App\Services\PageRenderingService;
use Tests\TestCase;

class PageRenderingServiceTest extends TestCase
{
    private array $seo;

    protected function setUp(): void
    {
        parent::setUp();
        $service = new PageRenderingService;
        $this->seo = $service->getPageSeo('about');
    }

    public function test_get_page_seo_title()
    {
        $title = $this->seo['meta_title'];
        $this->assertNotEmpty($title);
        $this->assertIsString($title);
    }

    public function test_get_page_seo_description()
    {
        $description = $this->seo['meta_description'];
        $this->assertNotEmpty($description);
        $this->assertIsString($description);
    }

    public function test_get_page_seo_keywords()
    {
        $keywords = $this->seo['meta_keywords'];
        $this->assertNotEmpty($keywords);
        $this->assertIsString($keywords);
    }
}
