<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AboutPageController extends Controller
{
    public function index()
    {
        return Inertia::render('About',self::getProps());
    }

    public static function getProps()
    {
        return [
            'meta_title' => trans('seo.about.title'),
            'meta_description' => trans('seo.about.meta.description'),
            'meta_keywords' => trans('seo.about.meta.description')
        ];
    }
}
