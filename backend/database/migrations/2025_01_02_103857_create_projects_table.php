<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id()->unique();
            $table->uuid('project_id')->unique()->default(DB::raw('uuid()'));
            $table->string('title');
            $table->string('github_link');
            $table->string('docs_link')->nullable();
            $table->string('demo_link')->nullable();
            $table->string('story_description');
            $table->string('problems_description');
            $table->string('solutions_description');
            $table->string('conclusion_description');
            $table->integer('hours_worked');
            $table->boolean('is_customer_project')->default(false);
            $table->boolean('is_pending')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
