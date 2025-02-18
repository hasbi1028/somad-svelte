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
        Schema::create('attendance_logs', function (Blueprint $table) {
            $table->char('id', 15)->primary();
    $table->char('user_id', 15);
    $table->enum('event_type', ['check_in', 'check_out', 'break_out', 'break_in', 'duty_start', 'duty_end']);
    $table->dateTime('event_time');
    $table->string('device_location');
    $table->decimal('latitude', 10, 8);
    $table->decimal('longitude', 11, 8);
    $table->text('device_info');
    $table->string('ip_address');
    $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attendance_logs');
    }
};
