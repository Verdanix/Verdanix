<?php

namespace App\Http\Controllers;


use Watson\Sitemap\Facades\Sitemap;

class SitemapController extends Controller
{
    public function index()
    {
        Sitemap::addTag(route('home'), null, 'daily', '1.0');
        Sitemap::addTag(route('about'));
        Sitemap::addTag(route('login'));
        Sitemap::addTag(route('register'));
        return Sitemap::render();
    }
}
