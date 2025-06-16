<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\Tags;

class TagsJsonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Tags::get(['type', 'type-name', 'name'])->toArray();
    }

    public function getByType(int $id)
    {
        return Tags::where('id', $id)->get(['type', 'type-name', 'name'])->toArray();
    }
}
