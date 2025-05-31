<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectImages extends Model
{
    /**
     * The table associated with the model.
     */
    protected $table = 'project_images';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'project_id',
        'url',
        'alt_text',
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
