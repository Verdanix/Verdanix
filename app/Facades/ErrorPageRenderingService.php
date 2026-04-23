<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \App\Services\ErrorPageRenderingService
 */
class ErrorPageRenderingService extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'error_page_rendering_service';
    }
}
