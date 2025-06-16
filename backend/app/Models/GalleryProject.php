<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryProject extends Model
{

    use hasFactory;

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
        'slug',
        'title',
        'client_name',
        'video',
        'github',
        'live',
        'description',
        'challenges',
        'solutions',
        'category_id',
        'type',
        'tech_stack'
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
