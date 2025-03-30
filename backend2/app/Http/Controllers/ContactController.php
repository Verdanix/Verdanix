<?php

namespace App\Http\Controllers;

use App\Http\Requests\InquiryRequest;
use App\Mail\InquiryMade;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Mail;
use Log;

class ContactController extends Controller
{
    public function store(InquiryRequest $request)
    {
        $admins = User::role("admin")->pluck("email")->toArray();
        foreach ($admins as $admin) {
            try {
                Mail::to($admin)->send(new InquiryMade($request->name, $request->email, $request->subject, $request->message));
            } catch (Exception $e) {
                Log::error("Failed to send email to {$admin}: " . $e->getMessage());
                return redirect(route("home"))->withErrors(trans("validation.contact.status.error"));
            }
        }
        return redirect(route("home"))->withErrors(trans("validation.contact.status.success"));
    }
}
