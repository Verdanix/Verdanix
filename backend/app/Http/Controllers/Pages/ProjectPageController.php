<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Project\ProjectJsonController;
use Http;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Client\ConnectionException;
use Inertia\Inertia;

class ProjectPageController extends Controller
{
    public function index(string $slug)
    {
        try {
            $project = ProjectJsonController::getProject($slug);
            return Inertia::render("Project", $this->getProps($project));
        } catch (ModelNotFoundException $e) {
            abort(404);
        }
    }

    public function getProps($project)
    {
        try {
            $images = Http::get(route("projects.getImages", [$project["id"]]))->json();
        } catch (ConnectionException $e) {
            $images = [];
        }

        return [
            "meta_title" => $project["title"],
            "meta_description" => $project["description"],
            "meta_keywords" => trans("seo.projects.meta.keywords"),
            "project" => $project,
            "images" => $images
        ];
    }
}
