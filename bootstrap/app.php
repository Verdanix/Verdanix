<?php

use App\Http\Middleware\HandleInertiaRequests;
use App\Services\PageRenderingService;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->respond(function (Response $response, Throwable $exception, Request $request) {
            $pageRenderingService = new PageRenderingService;
            // Only handle 404 for non-local environments and GET requests
            if ($response->getStatusCode() === 404) {
                return $pageRenderingService->renderPage('Errors/NotFound', 'errors/not-found')->toResponse($request)->setStatusCode(404);
            }

            return $response;
        });
    })->create();
