<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    protected $table = 'tags';

    protected $fillable = [
        'type',
        'type-name',
        'name'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
