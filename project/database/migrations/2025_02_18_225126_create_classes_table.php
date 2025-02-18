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
        Schema::create('classes', function (Blueprint $table) {
            $table->char('id', 15)->primary();
    $table->string('name');
    $table->decimal('grade', 10, 2);
    $table->string('academic_year');
    $table->char('homerun_teacher_id', 15);
    $table->timestamps();

    $table->foreign('homerun_teacher_id')->references('id')->on('teachers');
    $table->unique(['grade', 'academic_year']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classes');
    }
};
