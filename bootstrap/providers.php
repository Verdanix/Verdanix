<?php

use App\Providers\AppServiceProvider;
use App\Providers\RateLimitingProvider;
use App\Providers\TelescopeServiceProvider;

return [
    AppServiceProvider::class,
    RateLimitingProvider::class,
    TelescopeServiceProvider::class,
];
