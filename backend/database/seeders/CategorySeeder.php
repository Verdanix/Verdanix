<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories') -> insert([
            ['name' => 'Web Development'],
            ['name' => 'DevOps'],
            ['name' => 'UI/UX Design'],
            ['name' => 'Tools'],
            ['name' => 'Other'],
        ]);
    }
}
