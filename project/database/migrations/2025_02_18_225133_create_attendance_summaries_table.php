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
        Schema::create('attendance_summaries', function (Blueprint $table) {
            $table->char('id', 15)->primary();
    $table->char('user_id', 15);
    $table->date('attendance_date');
    $table->dateTime('first_check_in')->nullable();
    $table->dateTime('last_check_out')->nullable();
    $table->decimal('total_break_duration', 10, 2)->default(0);
    $table->decimal('work_duration', 10, 2)->default(0);
    $table->decimal('duty_duration', 10, 2)->default(0);
    $table->enum('status', ['present', 'late', 'absent', 'half_day', 'duty']);
    $table->text('notes')->nullable();
    $table->timestamps();

    $table->foreign('user_id')->references('id')->on('users');
    $table->unique(['user_id', 'attendance_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attendance_summaries');
    }
};
