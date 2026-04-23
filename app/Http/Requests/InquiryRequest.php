<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class InquiryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:45'],
            'email' => ['required', 'email', 'max:50'],
            'subject' => ['required', 'string', 'max:100'],
            'message' => ['required', 'string', 'max:1500'],
        ];
    }

    #[\Override]
    public function messages(): array
    {
        return [
            'name.required' => 'Your name is required.',
            'name.string' => 'Your name must be a set of words.',
            'name.max' => 'Your name must not exceed 45 characters.',
            'email.required' => 'Your email is required.',
            'email.email' => 'Your email must be a valid email address.',
            'email.max' => 'Your email must not exceed 50 characters.',
            'subject.required' => 'The subject is required.',
            'subject.string' => 'The subject must be a set of words.',
            'subject.max' => 'The subject must not exceed 100 characters.',
            'message.required' => 'The message is required.',
            'message.string' => 'The message must be a few sentences.',
            'message.max' => 'The message must not exceed 1500 characters.',
        ];
    }
}
