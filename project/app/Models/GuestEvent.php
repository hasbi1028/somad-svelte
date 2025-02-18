<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/GuestEvent.php
class GuestEvent extends Model
{
    protected $fillable = [
        'guest_id',
        'event_type',
        'event_time',
    ];

    // Relasi ke GuestBook
    public function guest()
    {
        return $this->belongsTo(GuestBook::class);
    }
}