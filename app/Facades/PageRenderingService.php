<?php

namespace App\Facades;

/**
 * @see \App\Services\PageRenderingService
 */
class PageRenderingService
{
    protected static function getFacadeAccessor(): string
    {
        return 'page_rendering_service';
    }
}
