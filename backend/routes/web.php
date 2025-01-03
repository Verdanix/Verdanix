<?php

use App\Http\Controllers\ProfileController;
use App\Http\Resources\ProjectResource;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Home', [
            'meta_title' => trans('seo.home.title'),
            'meta_description' => trans('seo.home.meta.description'),
            'meta_keywords' => trans('seo.home.meta.keywords'),
            'stats' => [
                'totalProjects' => ProjectResource::allProjectsCount(),
                'totalPendingProjects' => ProjectResource::allPendingProjects(),
                'totalClientProjects' => ProjectResource::allClientProjects(),
                'totalHoursWorked' => ProjectResource::allHoursWorked(),
            ],
        ]);
    });

    Route::get('/about', function () {
        return Inertia::render('About', [
            'meta_title' => 'About Mason Root',
            'meta_description' => trans('seo.about.meta.description'),
            'meta_keywords' => trans('seo.about.meta.description')
        ]);
    });

    Route::get('/translations/{locale}/{page}', function (string $locale, string $page) {
        $commonPath = base_path("lang/{$locale}/pages/common.php");
        $path = base_path("lang/{$locale}/pages/{$page}.php");
        if (file_exists($path)) {
            return response()->json(array_merge([], include($path), include($commonPath)));
        }
        return response()->json([], 404);
    });
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
