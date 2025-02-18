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
        Schema::create('official_duties', function (Blueprint $table) {
            $table->char('id', 15)->primary();
    $table->char('user_id', 15);
    $table->enum('duty_type', ['full_day', 'partial']);
    $table->dateTime('start_time');
    $table->dateTime('end_time');
    $table->text('description');
    $table->string('location');
    $table->string('document')->nullable();
    $table->enum('status', ['pending', 'approved', 'rejected']);
    $table->char('approved_by', 15)->nullable();
    $table->dateTime('approved_at')->nullable();
    $table->timestamps();

    $table->foreign('user_id')->references('id')->on('users');
    $table->foreign('approved_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('official_duties');
    }
};
