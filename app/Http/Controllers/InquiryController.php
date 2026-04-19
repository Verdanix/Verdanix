<?php

namespace App\Http\Controllers;

use App\Http\Requests\InquiryRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class InquiryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function store(InquiryRequest $request)
    {
        // TODO Email
        Log::info('NEW INQUIRY', $request->validated());

        return response()->json([])->setStatusCode(200);
    }
}
