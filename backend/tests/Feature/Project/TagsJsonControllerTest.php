<?php

namespace Tests\Feature\Project;

use Tests\TestCase;

class TagsJsonControllerTest extends TestCase
{
    public function testIndex()
    {
        $response = $this->getJson(route("tags.index"));

        $response->assertStatus(200)->assertJsonIsArray()->assertJsonStructure([
            '*' => [
                'type',
                'type-name',
                'name'
            ]
        ]);

    }
}
