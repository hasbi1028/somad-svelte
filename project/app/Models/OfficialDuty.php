<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/OfficialDuty.php
class OfficialDuty extends Model
{
    protected $fillable = [
        'user_id',
        'duty_type',
        'start_time',
        'end_time',
        'description',
        'location',
        'document',
        'status',
        'approved_by',
        'approved_at',
    ];

    // Relasi ke User (Pegawai)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relasi ke User (Approver)
    public function approver()
    {
        return $this->belongsTo(User::class, 'approved_by');
    }
}