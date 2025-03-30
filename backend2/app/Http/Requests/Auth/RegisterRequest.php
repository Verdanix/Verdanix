<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'min:2', 'max:30'],
            'last_name' => ['required', 'string', 'min:2', 'max:30'],
            'email' => ['required', 'email', 'max:255', 'unique:users', function ($attribute, $value, $fail) {
                if (!checkdnsrr(explode('@', $value)[1])) {
                    $fail(trans('auth.failed.verification.email'));
                }
            }],
            'password' => ['required', Password::defaults()],
            "confirm" => ['required', 'same:password'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    public function messages()
    {
        return [
            "first_name.required" => trans("validation.first_name.required"),
            "first_name.min" => trans("validation.first_name.min"),
            "first_name.max" => trans("validation.first_name.max"),
            "last_name.required" => trans("validation.last_name.required"),
            "last_name.min" => trans("validation.last_name.min"),
            "last_name.max" => trans("validation.last_name.max"),
            "email.required" => trans("validation.email.required"),
            "email.email" => trans("validation.email.email"),
            "email.max" => trans("validation.email.max"),
            "email.unique" => trans("validation.email.unique"),
            "password.required" => trans("validation.password.required"),
            "confirm.required" => trans("validation.confirm.required"),
            "confirm.same" => trans("validation.confirm.same"),
        ];
    }
}
