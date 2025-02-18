<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/ParentStudent.php
class ParentStudent extends Model
{
    protected $fillable = [
        'student_id',
        'parent_id',
        'relationship',
    ];

    // Relasi ke Student
    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    // Relasi ke Parent
    public function parents()
    {
        return $this->belongsTo(parents::class);
    }
}