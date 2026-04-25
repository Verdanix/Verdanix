<?php

namespace App\Services;

use Inertia\Inertia;

class PageRenderingService
{
    public function renderPage(string $page, ?string $key = '')
    {
        $path = strtolower($key ? "$page.{$key}" : $page);
        $seoContent = $this->getPageSeo($path);

        return Inertia::render($page, $seoContent);
    }

    public function getPageSeo(string $page): array
    {
        return [
            'meta_title' => trans("seo/$page.meta_title"),
            'meta_description' => trans("seo/$page.meta_description"),
            'meta_keywords' => trans("seo/$page.meta_keywords"),
        ];
    }
}
