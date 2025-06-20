<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryJsonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Category::get(['id', 'name'])->toArray();
    }
}
