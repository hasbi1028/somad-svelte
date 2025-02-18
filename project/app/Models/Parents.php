<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Parent.php
class Parents extends Model
{
    protected $fillable = [
        'user_id',
        'occupation',
        'education_level',
    ];

    // Relasi ke User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relasi ke Students
    public function students()
    {
        return $this->belongsToMany(Student::class, 'parent_students')
            ->withPivot('relationship');
    }
}