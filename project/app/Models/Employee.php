<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Employee.php
class Employee extends Model
{
    protected $fillable = [
        'user_id',
        'nipm',
        'employee_status',
        'join_date',
    ];

    // Relasi ke User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relasi ke Teacher
    public function teacher()
    {
        return $this->hasOne(Teacher::class);
    }

    // Relasi ke Staff
    public function staff()
    {
        return $this->hasOne(Staff::class);
    }
}