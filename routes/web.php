<?php

use App\Http\Controllers\InquiryController;
use App\Http\Controllers\ProfileController;
use App\Services\PageRenderingService;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PageRenderingService::class, 'renderPage'])->setDefaults(['page' => 'Landing', 'key' => 'landing'])->name('landing');
Route::get('/about', [PageRenderingService::class, 'renderPage'])->setDefaults(['page' => 'About', 'key' => 'about'])->name('about');
Route::get('/projects', [PageRenderingService::class, 'renderPage'])->setDefaults(['page' => 'About', 'key' => 'about'])->name('projects');
Route::get('/hobbies/motorcycling', [PageRenderingService::class, 'renderPage'])->setDefaults(['page' => 'About', 'key' => 'about'])->name('hobbies.motorcycling');
Route::get('/contact', [PageRenderingService::class, 'renderPage'])->setDefaults(['page' => 'Contact', 'key' => 'contact'])->name('contact');
Route::post('/contact', [InquiryController::class, 'store'])->name('submit.inquiry')->middleware(['throttle:contact-inquiry']);

/*
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});*/

require __DIR__.'/auth.php';
