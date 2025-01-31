<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $fillable = [
        'title',
        'github_link',
        'docs_link',
        'demo_link',
        'description',
        'keywords',
        'image',
        'visit_url',
        'more_url',
        'story_description',
        'problems_description',
        'solutions_description',
        'conclusion_description',
        'hours_worked',
        'is_customer_project',
        'is_pending',
        'is_featured'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'is_pending',
        'id'
    ];

    protected $casts = [
        'is_customer_project' => 'boolean',
        'is_pending' => 'boolean',
        'is_featured' => 'boolean',
        'hours_worked' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}

