<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// app/Models/Staff.php
class Staff extends Model
{
    protected $fillable = [
        'employee_id',
        'departement',
    ];

    // Relasi ke Employee
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}