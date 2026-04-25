<?php

namespace App\Services;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class ErrorPageRenderingService
{
    /**
     * @var PageRenderingService|Application|mixed|object|\page_rendering_service
     */
    private readonly mixed $pageRenderingService;

    public function __construct()
    {
        $this->pageRenderingService = app('page_rendering_service');
    }

    public function getPageData(int $statusCode): array|string|\Illuminate\Contracts\Translation\Translator
    {
        return trans("seo/error.$statusCode.page");
    }

    public function renderPage(Request $request, int $statusCode)
    {
        return $this->pageRenderingService
            ->renderPage('Error', "$statusCode.seo")
            ->with('data', $this->getPageData($statusCode))
            ->toResponse($request)
            ->setStatusCode($statusCode);
    }
}
