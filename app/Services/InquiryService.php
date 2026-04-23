<?php

namespace App\Services;

use App\Http\Requests\InquiryRequest;
use App\Mail\InquiryReceivedConfirmation;
use App\Mail\NewInquiryNotification;
use Illuminate\Support\Facades\Mail;

class InquiryService
{
    public function sendEmails(string $name, string $email, string $subject, string $message, string $timestamp, string $adminEmail)
    {
        Mail::to($adminEmail)->send(new NewInquiryNotification($name, $email, $subject, $message, $timestamp));
        Mail::to($adminEmail)->send(new InquiryReceivedConfirmation($adminEmail, $subject, $timestamp));
    }

    public function sendEmail(InquiryRequest $request)
    {
        $timestamp = now()->format('Y-m-d H:i:s T');
        $name = $request->input('name');
        $email = $request->input('email');
        $subject = $request->input('subject');
        $message = $request->input('message');
        $adminEmail = config('mail.admin_email');
        $this->sendEmails($name, $email, $subject, $message, $timestamp, $adminEmail);
    }
}
