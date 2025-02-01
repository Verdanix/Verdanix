<?php

namespace App\Http\Resources;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Project */
class ProjectResource extends JsonResource
{

    public static function getProject(string $title): Project|null
    {
        return Project::where('project_id', $title)->first();
    }

    public static function allClientProjects(): int
    {
        return Project::where('is_customer_project', true)->where('is_pending', false)->count();
    }

    public static function allProjectsCount(): int
    {
        return Project::where('is_pending', false)->count();
    }

    public static function allHoursWorked(): int
    {
        return Project::sum('hours_worked');
    }

    public static function allPendingProjects(): int
    {
        return Project::where('is_pending', true)->count();
    }

    public static function getFeaturedProjects(): array
    {
        return Project::where('is_featured', true)->get()->toArray();
    }

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->project_id,
            'title' => $this->title,
            'github_link' => $this->github_link,
            'docs_link' => $this->docs_link,
            'demo_link' => $this->demo_link,
            'story_description' => $this->story_description,
            'problems_description' => $this->problems_description,
            'solutions_description' => $this->solutions_description,
            'conclusion_description' => $this->conclusion_description,
            'hours_worked' => $this->hours_worked,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    public static function getClientProjects(): array
    {
        return Project::where('is_customer_project', true)->where('is_pending', false)->get()->toArray();
    }
}
