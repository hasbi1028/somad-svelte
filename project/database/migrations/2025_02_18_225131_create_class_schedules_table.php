<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('class_schedules', function (Blueprint $table) {
            $table->char('id', 15)->primary();
    $table->char('class_id', 15);
    $table->char('subject_id', 15);
    $table->char('teacher_id', 15);
    $table->enum('day_of_week', ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);
    $table->enum('hour_of_day', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
    $table->char('room_id', 15);
    $table->timestamps();

    $table->foreign('class_id')->references('id')->on('classes');
    $table->foreign('subject_id')->references('id')->on('subjects');
    $table->foreign('teacher_id')->references('id')->on('teachers');
    $table->foreign('room_id')->references('id')->on('rooms');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('class_schedules');
    }
};
