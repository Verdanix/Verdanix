<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \App\Services\InquiryService
 */
class InquiryService extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'inquiry_service';
    }
}
