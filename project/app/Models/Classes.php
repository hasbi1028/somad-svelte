<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Classes.php
class Classes extends Model
{
    protected $fillable = [
        'name',
        'grade',
        'academic_year',
        'homerun_teacher_id',
    ];

    // Relasi ke Teacher
    public function homerunTeacher()
    {
        return $this->belongsTo(Teacher::class, 'homerun_teacher_id');
    }

    // Relasi ke Students
    public function students()
    {
        return $this->hasMany(Student::class);
    }

    // Relasi ke ClassSchedules
    public function schedules()
    {
        return $this->hasMany(ClassSchedule::class);
    }
}
