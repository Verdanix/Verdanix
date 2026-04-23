<?php

namespace App\Providers;

use App\Services\ErrorPageRenderingService;
use App\Services\InquiryService;
use App\Services\PageRenderingService;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    #[\Override]
    public function register(): void
    {
        $this->app->singleton('page_rendering_service', fn () => new PageRenderingService);
        $this->app->singleton('inquiry_service', fn () => new InquiryService);
        $this->app->singleton('error_page_rendering_service', fn () => new ErrorPageRenderingService);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}
