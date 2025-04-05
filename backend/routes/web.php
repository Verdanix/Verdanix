<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::middleware("throttle:contact")->post('/contact', [ContactController::class, 'store'])->name('contact');

Route::middleware("auth")->group(function () {
    Route::get('/dashboard', function () {
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
    })->name('dashboard');
});


require __DIR__ . '/auth.php';
