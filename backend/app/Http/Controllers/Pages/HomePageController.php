<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', self::getProps());
    }

    public static function getProps()
    {
        return [
            'meta_title' => trans('seo.home.title'),
            'meta_description' => trans('seo.home.meta.description'),
            'meta_keywords' => trans('seo.home.meta.keywords'),
            'stats' => [
                "yearsExperience" => (date('Y') - config("app.career_start_year")) . "+",
                "projectCount" => "5" . "+",
                "clients" => 0 . "+", // TODO: Add client count
                // TODO: Add projects
                "projects" => [
                    [
                        "title" => "AI-Powered Analytics Platform",
                        "image" => "https://learn.microsoft.com/en-us/power-bi/create-reports/media/service-dashboards/power-bi-dashboard2.png",
                        "link" => "https://google.com",
                        "description" => "Enterprise-level analytics solution with machine learning capabilities.",
                        "tags" => [
                            "React",
                            "Python",
                            "Tensorflow"
                        ]
                    ], [
                        "title" => "AI-Powered Analytics Platform",
                        "image" => "https://learn.microsoft.com/en-us/power-bi/create-reports/media/service-dashboards/power-bi-dashboard2.png",
                        "link" => "https://google.com",
                        "description" => "Enterprise-level analytics solution with machine learning capabilities.",
                        "tags" => [
                            "React",
                            "Python",
                            "Tensorflow"
                        ]
                    ], [
                        "title" => "AI-Powered Analytics Platform",
                        "image" => "https://learn.microsoft.com/en-us/power-bi/create-reports/media/service-dashboards/power-bi-dashboard2.png",
                        "link" => "https://google.com",
                        "description" => "Enterprise-level analytics solution with machine learning capabilities.",
                        "tags" => [
                            "React",
                            "Python",
                            "Tensorflow"
                        ]
                    ],
                ]
            ]
        ];
    }
}
