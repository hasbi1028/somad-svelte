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
        Schema::create('guest_events', function (Blueprint $table) {
            $table->char('id', 15)->primary();
            $table->char('guest_id', 15);
            $table->enum('event_type', ['check_in', 'check_out']);
            $table->dateTime('event_time');
            $table->timestamps();
        
            $table->foreign('guest_id')->references('id')->on('guest_books');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('guest_events');
    }
};
