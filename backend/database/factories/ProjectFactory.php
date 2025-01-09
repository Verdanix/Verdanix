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
        $projectTitle = $this->faker->sentence(2);
        $titleUrl = strtolower(str_replace(' ', '-', $projectTitle));
        return [
            'title' => $projectTitle,
            'project_id' => $titleUrl,
            'github_link' => $this->faker->url(),
            'docs_link' => $this->faker->url(),
            'demo_link' => $this->faker->url(),
            'story_description' => $this->faker->paragraph(2),
            'problems_description' => $this->faker->paragraph(2),
            'solutions_description' => $this->faker->paragraph(2),
            'conclusion_description' => $this->faker->paragraph(2),
            'description' => $this->faker->paragraph(2),
            'keywords' => $this->faker->words(3, true),
            'image' => null,
            'visit_url' => "https://google.com",
            'more_url' => "https://127.0.0.1:8000/projects/{$titleUrl}/more",
            'hours_worked' => $this->faker->numberBetween(1, 100),
            'is_customer_project' => $this->faker->boolean(),
            'is_pending' => $this->faker->boolean(),
            'is_featured' => $this->faker->boolean(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
