<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Symfony\Component\HttpKernel\Exception\TooManyRequestsHttpException;

class RateLimitingProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    #[\Override]
    public function register(): void {}

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        RateLimiter::for('contact-inquiry', fn(Request $request) => Limit::perDay(2)->by($request->ip())->response(function (): void {
            throw new TooManyRequestsHttpException;
        }));
    }
}
