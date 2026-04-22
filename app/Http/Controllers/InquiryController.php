<?php

namespace App\Http\Controllers;

use App\Http\Requests\InquiryRequest;
use App\Services\InquiryService;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function store(InquiryRequest $request)
    {

        (new InquiryService)->sendEmail($request);

        return redirect()->back();
    }
}
