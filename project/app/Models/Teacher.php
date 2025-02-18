<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Teacher.php
class Teacher extends Model
{
    protected $fillable = [
        'employee_id',
        'subject_id',
        'teaching_certificate_number',
    ];

    // Relasi ke Employee
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    // Relasi ke Subject
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    // Relasi ke Classes (Homerun Teacher)
    public function homerunClasses()
    {
        return $this->hasMany(Classes::class, 'homerun_teacher_id');
    }

    // Relasi ke ClassSchedules
    public function schedules()
    {
        return $this->hasMany(ClassSchedule::class);
    }
}