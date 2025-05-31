<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectVideos extends Model
{
    /**
     * The table associated with the model.
     */
    protected $table = 'project_videos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'project_id',
        'url',
        'title',
    ];

    /**
     * The attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }
}
