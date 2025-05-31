<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GalleryProject extends Model
{
    /**
     * The table associated with the model.
     */
    protected $table = 'projects';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'title',
        'slug',
        'description',
        'challenges',
        'solutions',
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
