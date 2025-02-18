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
        Schema::create('students', function (Blueprint $table) {
            $table->char('id', 15)->primary();
    $table->char('user_id', 15);
    $table->string('nism');
    $table->string('nisn');
    $table->string('entry_year');
    $table->enum('status', ['active', 'graduated', 'dropped']);
    $table->char('class_id', 15);
    $table->timestamps();

    $table->foreign('user_id')->references('id')->on('users');
    $table->foreign('class_id')->references('id')->on('classes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
