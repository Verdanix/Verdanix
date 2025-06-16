<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\GalleryProject;

class ProjectJsonController extends Controller
{
    public function getAll()
    {
        return GalleryProject::get()->toArray();
    }

    public function getCategory(string $category)
    {
        return GalleryProject::where('category_id', $category)->get()->groupBy('type')->map(function ($group, $type) {
            return [
                'type' => $type,
                'projects' => $group->toArray(),
            ];
        })->values();
    }
}
