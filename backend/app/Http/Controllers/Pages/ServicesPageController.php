<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ServicesPageController extends Controller
{
    public function index()
    {
        return Inertia::render('Services', self::getProps());
    }

    public static function getProps()
    {
        return [
            "meta_title" => trans('seo.services.title'),
            "meta_description" => trans('seo.services.meta.description'),
            "meta_keywords" => trans('seo.services.meta.description')
        ];
    }
}
