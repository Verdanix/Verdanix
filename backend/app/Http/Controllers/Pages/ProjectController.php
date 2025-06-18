<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Project\CategoryJsonController;
use Inertia\Inertia;

class ProjectController extends Controller
{

    public function index()
    {
        return Inertia::render('Project', self::getProps());
    }

    public static function getProps(): array
    {
        return [
            'meta_title' => trans("seo.projects.title"),
            'meta_description' => trans("seo.projects.meta.description"),
            'meta_keywords' => trans("seo.projects.meta.keywords"),
            'categories' => app(CategoryJsonController::class)->index(),
        ];
    }
}
