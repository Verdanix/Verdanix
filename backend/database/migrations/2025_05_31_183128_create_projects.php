<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string("client-name")->nullable();
            $table->string("video");
            $table->string("github")->nullable();
            $table->string("live")->nullable();
            $table->string("description");
            $table->json("challenges")->default(json_encode([]));
            $table->json("solutions")->default(json_encode([]));
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
