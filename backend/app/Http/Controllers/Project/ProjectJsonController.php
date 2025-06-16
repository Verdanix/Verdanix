<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\GalleryProject;
use Illuminate\Http\Request;

class ProjectJsonController extends Controller
{
    public function getAll()
    {
        return GalleryProject::get()->groupBy('type')->toArray();
    }

    public function getCategory(int $category)
    {
        return GalleryProject::where('category_id', $category)->get()->groupBy('type');
    }

    public function getType(string $type)
    {
        return GalleryProject::where('type', $type)->get()->groupBy('type');
    }


    public function search(Request $request)
    {
        $query = (string)$request->input('query', '');
        return GalleryProject::whereAny(['title', 'description'], 'like', "%$query%")->get()->groupBy('type');
    }
}
