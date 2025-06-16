<?php

namespace Tests\Feature\Project;

use Tests\TestCase;

class CategoryJsonControllerTest extends TestCase
{
    public function testIndex()
    {
        $response = $this->getJson(route("categories.index"));

        $response->assertStatus(200)->assertJsonIsArray();
    }
}
