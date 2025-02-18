<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Student.php
class Student extends Model
{
    protected $fillable = [
        'user_id',
        'nism',
        'nisn',
        'entry_year',
        'status',
        'class_id',
    ];

    // Relasi ke User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relasi ke Class
    public function class()
    {
        return $this->belongsTo(Classes::class);
    }

    // Relasi ke Parents
    public function parents()
    {
        return $this->belongsToMany(Parent::class, 'parent_students')
            ->withPivot('relationship');
    }
}