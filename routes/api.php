<?php

use Illuminate\Support\Facades\Route;

Route::fallback(fn() => response()->json([], 404));
