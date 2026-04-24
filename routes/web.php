<?php

use App\Http\Controllers\InquiryController;
use App\Services\PageRenderingService;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageRenderingService::class, 'renderPage'])->setDefaults(['page' => 'Landing'])->name('landing');
Route::get('/about', [PageRenderingService::class, 'renderPage'])->setDefaults(['page' => 'About'])->name('about');
Route::get('/projects', [PageRenderingService::class, 'renderPage'])->setDefaults(['page' => 'About'])->name('projects');
Route::get('/hobbies/motorcycling', [PageRenderingService::class, 'renderPage'])->setDefaults(['page' => 'About'])->name('hobbies.motorcycling');
Route::get('/contact', [PageRenderingService::class, 'renderPage'])->setDefaults(['page' => 'Contact'])->name('contact');
Route::post('/contact', [InquiryController::class, 'store'])->name('submit.inquiry')->middleware(['throttle:contact-inquiry']);

require __DIR__.'/auth.php';
