<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'receive-inquiries']);

        $admin_role = Role::create(['name' => 'admin']);
        $user_role = Role::create(['name' => 'user']);

        $admin_role->givePermissionTo(['receive-inquiries']);
    }
}
