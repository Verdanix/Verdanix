<?php

namespace Tests\Feature\Project;

use Tests\TestCase;

class ProjectJsonControllerTest extends TestCase
{
    public function testIndex()
    {
        $response = $this->getJson(route("projects.getAll"));

        $response->assertStatus(200)->assertJsonStructure([
            '*' => [
                "*" => [
                    'id',
                    'title',
                    'description',
                    'category_id',
                    'type',
                    'created_at',
                    'updated_at',
                ]
            ]
        ]);
    }

    public function testGetCategory()
    {
        $response = $this->getJson(route("projects.getCategory", ['category' => 1]));

        $response->assertStatus(200)->assertJsonStructure([
            '*' => [
                '*' => [
                    'id',
                    'slug',
                    'title',
                    'client_name',
                    'video',
                    'github',
                    'live',
                    'description',
                    'challenges',
                    'solutions',
                    'created_at',
                    'updated_at',
                    'category_id',
                    'type',
                    'tech_stack',
                ]
            ]
        ]);
    }

    public function testGetInvalidCategory()
    {
        $response = $this->getJson(route("projects.getCategory", ['category' => 100000]));

        $response->assertStatus(200)->assertJsonIsArray();
        $response->assertStatus(200)->assertJson([]);
    }

    public function testSearch()
    {
        $response = $this->getJson(route("projects.search", ['query' => '']));
        $response->assertStatus(200)->assertJsonStructure([
            '*' => [
                '*' => [
                    'id',
                    'slug',
                    'title',
                    'client_name',
                    'video',
                    'github',
                    'live',
                    'description',
                    'challenges',
                    'solutions',
                    'created_at',
                    'updated_at',
                    'category_id',
                    'type',
                    'tech_stack',
                ]
            ]
        ]);
    }

    public function testInvalidSearch()
    {
        $response = $this->getJson(route("projects.search", ['query' => 'invalidalsdjfl;ajsdfl;akjsdfkl;ajsdf']));

        $response->assertStatus(200)->assertJsonIsArray()->assertExactJson([]);
    }

    public function testType()
    {
        $response = $this->getJson(route("projects.getType", ['type' => 'featured']));

        $response->assertStatus(200)->assertJsonStructure([
            '*' => [
                '*' => [
                    'id',
                    'slug',
                    'title',
                    'client_name',
                    'video',
                    'github',
                    'live',
                    'description',
                    'challenges',
                    'solutions',
                    'created_at',
                    'updated_at',
                    'category_id',
                    'type',
                    'tech_stack',
                ]
            ]
        ]);
    }

    public function testInvalidType()
    {
        $response = $this->getJson(route("projects.getType", ['type' => 'invalid']));

        $response->assertStatus(200)->assertJsonIsArray()->assertExactJson([]);
    }
}
