<?php

use App\Http\Controllers\Project\CategoryJsonController;
use App\Http\Controllers\Project\ProjectJsonController;
use App\Http\Controllers\Project\TagsJsonController;

Route::get('/translations/{locale}/{page}', function (string $locale, string $page) {
    $commonPath = base_path("lang/{$locale}/pages/common.php");
    $path = base_path("lang/{$locale}/pages/{$page}.php");
    if (file_exists($path)) {
        return response()->json(array_merge([], include($path), include($commonPath)));
    }
    return response()->json([], 404);
})->name("translations");

Route::get("/categories", [CategoryJsonController::class, "index"])->name("categories.index");

Route::prefix("")->group(function () {
    Route::get("/tags", [TagsJsonController::class, "index"])->name("tags.index");
    Route::get("/tags/{id}", [TagsJsonController::class, "getByType"])->name("tags.getByType");
});

Route::prefix("")->group(function () {
    Route::get("/projects", [ProjectJsonController::class, "getAll"])->name("projects.getAll");
    Route::get("/projects/category/{category}", [ProjectJsonController::class, "getCategory"])->name("projects.getCategory");
    Route::get("/projects/type/{type}", [ProjectJsonController::class, "getType"])->name("projects.getType");
    Route::get("/projects/search", [ProjectJsonController::class, "search"])->name("projects.search");
});
