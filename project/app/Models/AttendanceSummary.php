<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/AttendanceSummary.php
class AttendanceSummary extends Model
{
    protected $fillable = [
        'user_id',
        'attendance_date',
        'first_check_in',
        'last_check_out',
        'total_break_duration',
        'work_duration',
        'duty_duration',
        'status',
        'notes',
    ];

    // Relasi ke User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}