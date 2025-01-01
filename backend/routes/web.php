<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home', [
        'meta_title' => trans('message.my_full_name'),
        'meta_description' => trans('message.seo_base_description'),
        'meta_keywords' => trans('message.seo_keywords')
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
