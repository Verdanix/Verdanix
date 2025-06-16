<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Model;
use App\Models\Tags;
use Illuminate\Database\Eloquent\Factories\Factory;
use Str;

/**
 * @extends Factory<Model>
 */
class GalleryProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->unique()->sentence();
        return [
            'slug' => Str::slug($name),
            'title' => $name,
            'client_name' => $this->faker->randomElement([$this->faker->company, null]),
            'video' => 'video1.mp4',
            'github' => 'https://github.com/example/project1',
            'live' => 'https://example.com/project1',
            'description' => $this->faker->paragraphs(1, true),
            'challenges' => json_encode([
                $this->faker->sentence(3),
                $this->faker->sentence(3),
                $this->faker->sentence(3),
                $this->faker->sentence(3),
            ]),
            'solutions' => json_encode([
                $this->faker->sentence(3),
                $this->faker->sentence(3),
                $this->faker->sentence(3),
                $this->faker->sentence(3),
            ]),
            'tech_stack' => json_encode(
                array_merge(
                    Tags::where('type', 'backend')->inRandomOrder()->limit(2)->pluck('id')->toArray(),
                    Tags::where('type', 'frontend')->inRandomOrder()->limit(4)->pluck('id')->toArray(),
                    Tags::where('type', 'devops')->inRandomOrder()->limit(3)->pluck('id')->toArray(),
                    Tags::where('type', 'data-storage')->inRandomOrder()->limit(2)->pluck('id')->toArray(),
                    Tags::where('type', 'design')->inRandomOrder()->limit(3)->pluck('id')->toArray(),
                    Tags::where('type', 'networking')->inRandomOrder()->limit(5)->pluck('id')->toArray(),
                    Tags::where('type', 'other')->inRandomOrder()->limit(3)->pluck('id')->toArray()
                )
            ),
            'category_id' => Category::inRandomOrder()->first()->id ?? 1,
            'type' => $this->faker->randomElement(['featured', "client", "personal", "research"]),
        ];
    }
}
