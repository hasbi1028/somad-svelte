<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Subject.php
class Subject extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    // Relasi ke Teachers
    public function teachers()
    {
        return $this->hasMany(Teacher::class);
    }

    // Relasi ke ClassSchedules
    public function schedules()
    {
        return $this->hasMany(ClassSchedule::class);
    }
}