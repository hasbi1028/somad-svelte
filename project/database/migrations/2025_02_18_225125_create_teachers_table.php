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
        Schema::create('teachers', function (Blueprint $table) {
            $table->char('id', 15)->primary();
    $table->char('employee_id', 15);
    $table->char('subject_id', 15);
    $table->string('teaching_certificate_number');
    $table->timestamps();

    $table->foreign('employee_id')->references('id')->on('employees');
    $table->foreign('subject_id')->references('id')->on('subjects');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
