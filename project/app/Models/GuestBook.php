<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/GuestBook.php
class GuestBook extends Model
{
    protected $fillable = [
        'full_name',
        'phone_number',
        'email',
        'purpose',
    ];

    // Relasi ke GuestEvent
    public function events()
    {
        return $this->hasMany(GuestEvent::class);
    }
}