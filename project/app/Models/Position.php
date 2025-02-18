<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Position.php
class Position extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    // Relasi ke Users
    public function users()
    {
        return $this->hasMany(User::class);
    }
}