<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware("guest") -> group(function () {
    Route::get('/', function () {
        return Inertia::render('Home', [
            'meta_title' => trans('seo.home.title'),
            'meta_description' => trans('seo.home.meta.description'),
            'meta_keywords' => trans('seo.home.meta.keywords'),
            'stats' => [
                "yearsExperience" => (date('Y') - config("app.career_start_year")) . "+",
                "projectCount" => "5" . "+",
                "clients" => 0 . "+", // TODO: Add client count
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
            ],
        ]);
    })->name('home');

    Route::get('/about', function () {
        return Inertia::render('About', [
            'meta_title' => trans('seo.about.title'),
            'meta_description' => trans('seo.about.meta.description'),
            'meta_keywords' => trans('seo.about.meta.description')
        ]);
    })->name('about');

    Route::get('/translations/{locale}/{page}', function (string $locale, string $page) {
        $commonPath = base_path("lang/{$locale}/pages/common.php");
        $path = base_path("lang/{$locale}/pages/{$page}.php");
        if (file_exists($path)) {
            return response()->json(array_merge([], include($path), include($commonPath)));
        }
        return response()->json([], 404);
    })->name("translations");

    Route::middleware("throttle:contact")->post('/contact', [ContactController::class, 'store'])->name('contact');
});

require __DIR__.'/auth.php';
