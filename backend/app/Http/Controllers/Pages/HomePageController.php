<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\GalleryProject;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', self::getProps());
    }

    public static function getProps()
    {
        Log::info(GalleryProject::where("type", "LIKE", "featured")->limit(3)->get());
        return [
            'meta_title' => trans('seo.home.title'),
            'meta_description' => trans('seo.home.meta.description'),
            'meta_keywords' => trans('seo.home.meta.keywords'),
            'stats' => [
                "yearsExperience" => (date('Y') - config("app.career_start_year")) . "+",
                "projectCount" => GalleryProject::count("id") . "+",
                "clients" => GalleryProject::count("client_name") . "+",
                "projects" => GalleryProject::where("type", "LIKE", "featured")->limit(3)->get(),
            ]
        ];
    }
}
