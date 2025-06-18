<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\GalleryProject;
use App\Models\Tags;
use Illuminate\Http\Request;

class ProjectJsonController extends Controller
{
    public function getAll()
    {
        return GalleryProject::get()->map(function ($project) {
            return $this->convertTags($project);
        })->groupBy('type')->toArray();
    }

    function convertTags($project): array
    {
        $project->tech_stack = array_map(function ($tag) {
            return Tags::where('id', $tag)->first();
        }, json_decode($project->tech_stack));

        return $project->toArray();
    }

    public function getCategory(int $category)
    {
        return GalleryProject::where('category_id', $category)->get()->map(function ($project) {
            return $this->convertTags($project);
        })->groupBy('type');
    }

    public function getType(string $type)
    {
        return GalleryProject::where('type', $type)->get()->map(function ($project) {
            return $this->convertTags($project);
        })->groupBy('type');
    }

    public function search(Request $request)
    {
        $query = (string)$request->input('query', '');
        return GalleryProject::whereAny(['title', 'description'], 'like', "%$query%")->get()->map(function ($project) {
            return $this->convertTags($project);
        })->groupBy('type');
    }
}
