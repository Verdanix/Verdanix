<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Tags;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Tags::get(['type', 'type-name', 'name']) ->toArray();
    }
}
