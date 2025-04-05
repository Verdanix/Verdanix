<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
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
            'meta_title' => trans('seo.register.title'),
            'meta_description' => trans('seo.register.meta.description'),
            'meta_keywords' => trans('seo.register.meta.keywords'),
            'unverified' => (bool)$request->query('unverified'),
        ]);
    }

    public function redirect(string $provider)
    {
        if (!$this->isValidProvider($provider)) {
            return redirect(route("auth.register"))->withErrors([trans("auth.invalid-provider")]);
        }

        return Socialite::driver($provider)->redirect();
    }

    private function isValidProvider(string $provider)
    {
        $validProviders = ['google', 'github'];
        return in_array($provider, $validProviders);
    }

    public function callback(string $provider)
    {
        if (!$this->isValidProvider($provider)) {
            return redirect(route("auth.register"))->withErrors([trans("auth.invalid-provider")]);
        }
        $socialiteUser = Socialite::driver($provider)->user();
        $splitName = explode(" ", $socialiteUser->getName());
        $firstName = $splitName[0];
        $lastName = count($splitName) > 1 ? implode(" ", array_slice($splitName, 1)) : "";

        $user = User::updateOrCreate([
            'email' => $socialiteUser->getEmail(),
        ], [
            'first_name' => $firstName,
            'last_name' => $lastName,
            'email' => $socialiteUser->getEmail(),
            "email_verified_at" => now(),
            "password" => bcrypt(str()->random(63)),
            'provider' => $provider,
            'provider_token' => $socialiteUser->token,
            'refresh_token' => $socialiteUser->refreshToken
        ]);

        Auth::login($user, true);
        return redirect(route("dashboard"));
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

        return redirect(route("auth.register"));
    }
}
