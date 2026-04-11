<?php

namespace App\Services;

use Inertia\Inertia;

class PageRenderingService
{
    public function getPageSeo(string $page): array
    {
        return [
            'meta_title' => __("seo/$page.meta_title"),
            'meta_description' => __("seo/$page.meta_description"),
            'meta_keywords' => __("seo/$page.meta_keywords"),
        ];
    }

    public function renderPage(string $page, ?string $key = null)
    {
        $seoContent = $this->getPageSeo($key ?? $page);

        return Inertia::render($page, $seoContent);
    }
}
