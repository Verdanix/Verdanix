<?php

namespace Tests\Feature\Project;

use Tests\TestCase;

class CategoryControllerTest extends TestCase
{
    public function testIndex()
    {
        $response = $this->getJson(route("categories.index"));

        $response->assertStatus(200) -> assertJsonIsArray();
    }
}
