<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/ClassSchedule.php
class ClassSchedule extends Model
{
    protected $fillable = [
        'class_id',
        'subject_id',
        'teacher_id',
        'day_of_week',
        'hour_of_day',
        'room_id',
    ];

    // Relasi ke Class
    public function class()
    {
        return $this->belongsTo(Classes::class, 'class_id');
    }

    // Relasi ke Subject
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    // Relasi ke Teacher
    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    // Relasi ke Room
    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}
