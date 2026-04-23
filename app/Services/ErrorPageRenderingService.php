<?php

namespace App\Services;

use Illuminate\Http\Request;

class ErrorPageRenderingService
{
    public function __construct()
    {
        $this->pageRenderingService = app('page_rendering_service');
    }

    public function getPageData(int $statusCode): array
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
