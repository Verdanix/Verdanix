<?php

namespace Tests\Feature\Project;

use Tests\TestCase;

class ProjectJsonControllerTest extends TestCase
{
    public function testIndex()
    {
        $response = $this->getJson(route("projects.getAll"));

        $response->assertStatus(200) -> assertJsonIsArray() -> assertJsonStructure([
            '*' => [
                'id',
                'title',
                'description',
                'category_id',
                'type',
                'created_at',
                'updated_at',
            ]
        ]);
    }

    public function testGetCategory()
    {
        $response = $this->getJson(route("projects.getCategory", ['category' => 1]));

        $response->assertStatus(200) -> assertJsonIsArray();
    }

    public function testGetInvalidCategory()
    {
        $response = $this->getJson(route("projects.getCategory", ['category' => 100000]));

        $response->assertStatus(200) -> assertJsonIsArray();
        $response->assertStatus(200) -> assertJson([]);
    }
}
