<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Room.php
class Room extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    // Relasi ke ClassSchedules
    public function schedules()
    {
        return $this->hasMany(ClassSchedule::class);
    }
}