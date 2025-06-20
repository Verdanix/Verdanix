<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\Pages\AboutPageController;
use App\Http\Controllers\Pages\GalleryPageController;
use App\Http\Controllers\Pages\HomePageController;
use App\Http\Controllers\Pages\ProjectPageController;
use App\Http\Controllers\Pages\ServicesPageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomePageController::class, 'index'])->name('home');

Route::get('/about', [AboutPageController::class, 'index'])->name('about');

Route::get("/services", [ServicesPageController::class, 'index'])->name('services');

Route::middleware("throttle:contact")->post('/contact', [ContactController::class, 'store'])->name('contact');

Route::middleware(["auth", "verified"])->group(function () {
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

Route::prefix("/projects")->group(function () {
    Route::get('/', [GalleryPageController::class, 'index'])->name('projects.index');
    Route::get("/{slug}", [ProjectPageController::class, 'index'])->name('project.index');
});

require __DIR__ . '/auth.php';
