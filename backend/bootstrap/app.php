<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ])->redirectGuestsTo(fn(Request $request) => route("register"))
            ->redirectUsersTo(fn(Request $request) => route('dashboard'));
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->renderable(function (Throwable $e, $request) {
            if ($e instanceof ValidationException) {
                return redirect()->back()->withErrors($e->errors());
            }

            if ($e instanceof NotFoundHttpException) {
                return Inertia::render("Errors/NotFound404", [
                    "meta_title" => trans("pages/errors.not_found.seo.title"),
                    "meta_description" => trans("pages/errors.not_found.seo.meta.description"),
                    "meta_keywords" => trans("pages/errors.not_found.seo.meta.keywords"),
                    ])->toResponse($request) -> setStatusCode(Response::HTTP_NOT_FOUND);
            }

            if ($e instanceof AuthenticationException) {
                return redirect(route("register"));
            }

            return redirect()->back()->withErrors([
                'error' => $e->getMessage(),
            ]);
        });
    })->create();
