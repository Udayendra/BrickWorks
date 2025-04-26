<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ViewServiceController extends Controller
{
    //view all services
    public function index()
    {
        $service = Service::where("status", 1)->orderBy('created_at', 'desc')->get();
        return response()->json([
            "status" => true,
            "data" => $service
        ]);
    }

    // view latest 
    public function latestService(Request $request)
    {
        $service = Service::where("status", 1)->take($request->get('limit'))->orderBy('created_at', 'desc')->get();
        return response()->json([
            "status" => true,
            "data" => $service
        ]);
    }
}
