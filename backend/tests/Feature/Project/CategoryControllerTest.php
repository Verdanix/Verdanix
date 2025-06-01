<?php

namespace Tests\Feature\Project;

use Tests\TestCase;

class CategoryControllerTest extends TestCase
{
    public function testIndex()
    {
        $response = $this->getJson('/api/categories');

        $response->assertStatus(200) -> assertJsonIsArray();
    }
}
