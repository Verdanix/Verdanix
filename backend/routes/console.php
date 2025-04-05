<?php

use App\Models\User;
use Database\Seeders\RolesAndPermissionSeeder;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('roles:create', function () {
    Artisan::call('db:seed', ['--class' => RolesAndPermissionSeeder::class]);
}) -> purpose('Seed the roles and permissions');

Artisan::command("roles:give {email : The email of the user} {role : The role to assign}", function (string $email, string $role) {
    User::where("email", $email)->first()->assignRole($role);
})->purpose('Assign a role to a user');
