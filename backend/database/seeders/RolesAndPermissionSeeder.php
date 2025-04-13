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
        Permission::updateOrCreate(['name' => 'receive-inquiries']);
        Permission::updateOrCreate(['name' => 'view-dashboard']);

        $admin_role = Role::updateOrCreate(['name' => 'admin']);
        $user_role = Role::updateOrCreate(['name' => 'user']);

        $admin_role->givePermissionTo(['receive-inquiries']);
        $admin_role->givePermissionTo(['view-dashboard']);

        $user_role->givePermissionTo(['view-dashboard']);
    }
}
