<?php

use App\Http\Controllers\SitemapController;
use App\Http\Resources\ProjectResource;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About', [
        'meta_title' => trans('seo.about.title'),
        'meta_description' => trans('seo.about.meta.description'),
        'meta_keywords' => trans('seo.about.meta.description')
    ]);
})->name('about');

Route::get('/projects', function () {
    return Inertia::render('Projects', [
        'meta_title' => trans('seo.projects.title'),
        'meta_description' => trans('seo.projects.meta.description'),
        'meta_keywords' => trans('seo.projects.meta.keywords'),
        'stats' => [
            'totalProjects' => ProjectResource::allProjectsCount(),
            'totalPendingProjects' => ProjectResource::allPendingProjects(),
            'totalClientProjects' => ProjectResource::allClientProjects(),
            'totalHoursWorked' => ProjectResource::allHoursWorked(),
        ],
        'projects' => [
            'featured' => ProjectResource::getFeaturedProjects(),
            'client' => ProjectResource::getClientProjects(),
        ]
    ]);
})->name('projects');

Route::get('/projects/{project_title}/more', function ($project_title) {
    $project = ProjectResource::getProject($project_title);

    if (!$project) {
        abort(404);
    }

    return Inertia::render('ProjectInfo', [
        'meta_title' => $project->title,
        'meta_description' => $project->description,
        'meta_keywords' => $project->keywords,
        'project_info' => [
            'github_link' => $project->github_link,
            'docs_link' => $project->docs_link,
            'demo_link' => $project->demo_link,
            'image' => $project->image,
            'story_description' => $project->story_description,
            'problems_description' => $project->problems_description,
            'solutions_description' => $project->solutions_description,
            'conclusion_description' => $project->conclusion_description,
        ]
    ]);
})->name('projects.more');
Route::prefix('socials')->group(function () {
    Route::get('linkedin', function () {
        return redirect(config('socials.linkedin'));
    })->name('linkedin');
    Route::get('github', function () {
        return redirect(config('socials.github'));
    })->name('socials.github');
    Route::get('instagram', function () {
        return redirect(config('socials.instagram'));
    })->name('socials.instagram');
});

Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');


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

/*Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});*/

require __DIR__ . '/auth.php';
