<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        RateLimiter::for("contact", function ($request) {
            return Limit::perMinute(3)->by(optional($request->user())->id ?: $request->ip());
        });

        RateLimiter::for("login", function ($request) {
            return Limit::perMinute(4)->by(optional($request->user())->id ?: $request->ip());
        });

        Password::defaults(function () {
            return Password::min(8)->mixedCase()->numbers()->symbols()->uncompromised();
        });
    }
}
