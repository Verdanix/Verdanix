<?php

namespace App\Http\Handlers;

use Closure;
use Illuminate\Http\Request;
use Spatie\Honeypot\SpamResponder\SpamResponder;
use Symfony\Component\HttpKernel\Exception\TooManyRequestsHttpException;

class HoneyPotHandler implements SpamResponder
{
    public function respond(Request $request, Closure $next)
    {
        throw new TooManyRequestsHttpException;
    }
}
