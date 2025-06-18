<?php

namespace Tests\Feature\Project;

use App\Models\GalleryProject;
use Tests\TestCase;

class ProjectImagesJsonControllerTest extends TestCase
{
    public function testFetch()
    {
        $response = $this->getJson(route("projects.getImages", GalleryProject::count()));

        $response->assertStatus(200)->assertJsonIsArray()->assertJsonStructure([
            '*' => [
                'url',
                'alt_text'
            ]
        ]);
    }
}
