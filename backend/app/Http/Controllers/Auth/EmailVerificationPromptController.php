<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the email verification prompt.
     */
    public function __invoke(Request $request): RedirectResponse|Response
    {
        return $request->user()->hasVerifiedEmail()
            ? redirect()->intended(route('dashboard', absolute: false))
            : Inertia::render('Auth/VerifyEmail', self::getProps());
    }

    public static function getProps() {
        return [
            'status' => session('status'),
            "meta_title" => trans("seo.verify_email.title"),
            "meta_description" => trans("seo.verify_email.meta.description"),
            "meta_keywords" => trans("seo.verify_email.meta.keywords"),
        ];
    }
}
