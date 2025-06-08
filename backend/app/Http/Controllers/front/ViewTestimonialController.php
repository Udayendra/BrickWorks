<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class ViewTestimonialController extends Controller
{
    public function index()
    {
        $testimonial = Testimonial::where('status', 1)->orderBy('created_at', 'desc')->get();
        return response()->json([
            "status" => true,
            "data" => $testimonial
        ]);
    }

    public function latestArticle(Request $request)
    {
        $testimonial = Testimonial::where('status', 1)->take($request->get('limit'))->orderBy('created_at', 'desc')->get();
        return response()->json([
            "status" => true,
            "data" => $testimonial
        ]);
    }
}
