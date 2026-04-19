<?php

use App\Http\Controllers\InquiryController;
use Illuminate\Support\Facades\Route;

Route::post('/contact', [InquiryController::class, 'store'])->name('submit.inquiry')->middleware(['throttle:contact-inquiry']);
