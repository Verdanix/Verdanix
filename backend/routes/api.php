<?php

use App\Http\Controllers\Project\CategoryController;

Route::get('/translations/{locale}/{page}', function (string $locale, string $page) {
    $commonPath = base_path("lang/{$locale}/pages/common.php");
    $path = base_path("lang/{$locale}/pages/{$page}.php");
    if (file_exists($path)) {
        return response()->json(array_merge([], include($path), include($commonPath)));
    }
    return response()->json([], 404);
})->name("translations");

Route::get("/categories", [CategoryController::class, "index"])->name("categories");
