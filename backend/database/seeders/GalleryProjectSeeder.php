<?php

namespace Database\Seeders;

use App\Models\GalleryProject;
use App\Models\ProjectImages;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GalleryProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("projects")->delete();
        GalleryProject::factory()->count(5)->create();
        ProjectImages::factory()->count(30)->create();
    }
}
