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
        Schema::create('parent_students', function (Blueprint $table) {
            $table->char('id', 15)->primary();
            $table->char('student_id', 15);
            $table->char('parent_id', 15);
            $table->enum('relationship', ['father', 'mother', 'guardian']);
            $table->timestamps();
        
            $table->foreign('student_id')->references('id')->on('students');
            $table->foreign('parent_id')->references('id')->on('parents');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parent_students');
    }
};
