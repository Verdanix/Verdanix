<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class ProjectsFactory extends Factory
{
    protected $model = Project::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'github_link' => $this->faker->word(),
            'docs_link' => $this->faker->word(),
            'demo_link' => $this->faker->word(),
            'story_description' => $this->faker->text(),
            'problems_description' => $this->faker->text(),
            'solutions_description' => $this->faker->text(),
            'conclusion_description' => $this->faker->text(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}