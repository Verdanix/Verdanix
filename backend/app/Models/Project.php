<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $fillable = [
        'name',
        'github_link',
        'docs_link',
        'demo_link',
        'story_description',
        'problems_description',
        'solutions_description',
        'conclusion_description',
        'hours_worked',
        'is_customer_project',
        'is_pending'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'id'
    ];

    protected $casts = [
        'hours_worked' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}

