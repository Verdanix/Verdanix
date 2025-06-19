<?php

namespace Database\Factories;

use App\Models\GalleryProject;
use App\Models\ProjectImages;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ProjectImages>
 */
class ProjectImagesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'project_id' => GalleryProject::all()->random()->id,
            'url' => "https://placehold.co/600x400?text=Project+Image+" . $this->faker->unique()->numberBetween(1, 100),
            'alt_text' => $this->faker->sentence(6, true),
        ];
    }
}
