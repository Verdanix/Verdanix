<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{

    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(RegisterRequest $request): RedirectResponse
    {
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        try {
            event(new Registered($user));
        } catch (Exception $e) {
            $user->delete();
            return back()->withErrors(['email' => trans('auth.failed.verification.email')]);
        }

        Auth::login($user);
        return redirect(route("dashboard"));
    }

    /**
     * Display the registration view.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('Auth/Register', [
            'meta_title' => trans('seo.register.title'),
            'meta_description' => trans('seo.register.meta.description'),
            'meta_keywords' => trans('seo.register.meta.keywords')
        ]);
    }
}
