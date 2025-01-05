<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:30',
            'email' => 'required|email|max:255|unique:users',
            'password' => ['required', Password::defaults()],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    public function messages()
    {
        return [
            'name.required' => 'Please provide your name',
            'name.max' => 'Please provide a name under 30 characters.',
            'email.required' => 'Please provide your email address',
            'email.email' => 'Please provide a valid email address.',
            'email.unique' => 'Please provide a valid email address.',
            'password.required' => 'Please provide a password',
        ];
    }
}
