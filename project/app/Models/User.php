<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'nik',
        'birth_place',
        'birth_date',
        'gender',
        'phone_number',
        'address',
        'role',
        'position_id',
    ];

    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    // Relasi ke Student
    public function student()
    {
        return $this->hasOne(Student::class);
    }

    // Relasi ke Employee
    public function employee()
    {
        return $this->hasOne(Employee::class);
    }

    // Relasi ke Parent
    public function parents()
    {
        return $this->hasOne(parents::class);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
