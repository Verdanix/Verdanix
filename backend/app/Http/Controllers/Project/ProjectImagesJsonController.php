<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\ProjectImages;

class ProjectImagesJsonController extends Controller
{
    public function getImages(int $projectId) {
        return ProjectImages::where('project_id', $projectId)->get() ->toArray();
    }
}
