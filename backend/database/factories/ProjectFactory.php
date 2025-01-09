<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends Factory<Project>
 */
class ProjectFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'github_link' => $this->faker->url(),
            'docs_link' => $this->faker->url(),
            'demo_link' => $this->faker->url(),
            'story_description' => $this->faker->paragraph(2),
            'problems_description' => $this->faker->paragraph(2),
            'solutions_description' => $this->faker->paragraph(2),
            'conclusion_description' => $this->faker->paragraph(2),
            'hours_worked' => $this->faker->numberBetween(1, 100),
            'is_customer_project' => $this->faker->boolean(),
            'is_pending' => $this->faker->boolean(),
            'is_featured' => $this->faker->boolean(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
