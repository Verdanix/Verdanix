<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $backendTech = ["Laravel", "NextJS", "NestJS", "Spring", "SpringBoot", "Django", "Flask", "PhP", "Java", "Python"];
        $frontendTech = ["React", "Vue", "Angular", "Svelte", "TailwindCSS", "Bootstrap", "SASS", "CSS", "Vite", "InertiaJS", "WebPack", "HTML", "JavaScript", "TypeScript"];
        $devOpsTech = ["Docker", "Kubernetes", "Terraform", "Ansible", "AWS", "GCP", "Azure", "DigitalOcean", "Heroku", "Netlify", "Vercel", "Cloudflare", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Sentry"];
        $dataStorageTech = ["PostgreSQL", "MySQL", "MariaDB", "MongoDB", "SQLite", "Redis", "Elasticsearch", "Cassandra", "Firebase", "DynamoDB", "Neo4j", "AWS S3", "Google Cloud Storage", "Azure Blob Storage"];
        $designTech = ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "InDesign", "Canva", "GIMP"];
        $networkingTech = ["TCP/IP", "HTTP", "HTTPS", "FTP", "SSH", "DNS", "DHCP", "NAT", "VPN", "Firewalls", "Load Balancers", "Proxies", "CDN", "WebSockets"];
        $otherTech = ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Trello", "Slack", "Discord", "Zoom", "Microsoft Teams", "Notion", "Confluence", "Asana", "ClickUp"];

        DB::table("tags")->truncate();

        // Backend
        foreach ($backendTech as $tag) {
            DB::table("tags")->insert([
                "type" => "backend",
                "type-name" => "Backend",
                "name" => $tag,
            ]);
        }

        // Frontend
        foreach ($frontendTech as $tag) {
            DB::table("tags")->insert([
                "type" => "frontend",
                "type-name" => "Frontend",
                "name" => $tag,
            ]);
        }

        // DevOps
        foreach ($devOpsTech as $tag) {
            DB::table("tags")->insert([
                "type" => "devops",
                "type-name" => "DevOps",
                "name" => $tag,
            ]);
        }

        // Data Storage
        foreach ($dataStorageTech as $tag) {
            DB::table("tags")->insert([
                "type" => "data-storage",
                "type-name" => "Data Storage",
                "name" => $tag,
            ]);
        }

        // Design
        foreach ($designTech as $tag) {
            DB::table("tags")->insert([
                "type" => "design",
                "type-name" => "Design",
                "name" => $tag,
            ]);
        }

        // Networking
        foreach ($networkingTech as $tag) {
            DB::table("tags")->insert([
                "type" => "networking",
                "type-name" => "Networking",
                "name" => $tag,
            ]);
        }

        // Other
        foreach ($otherTech as $tag) {
            DB::table("tags")->insert([
                "type" => "other",
                "type-name" => "Other",
                "name" => $tag,
            ]);
        }
    }
}
