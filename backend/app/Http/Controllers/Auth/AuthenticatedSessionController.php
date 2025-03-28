<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('Auth/Register', [
            'meta_title' => trans('seo.login.title'),
            'meta_description' => trans('seo.login.meta.description'),
            'meta_keywords' => trans('seo.login.meta.keywords')
        ]);
    }


    public function redirect(string $provider)
    {
        if (!in_array($provider, ['google', 'linkedin', 'github'])) {
            echo "INVALID";
            return redirect('/register')->withErrors([trans("auth.invalid-provider")]);
        }
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard'));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
