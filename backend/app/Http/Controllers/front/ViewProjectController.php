<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ViewProjectController extends Controller
{
    // view all projects
    public function index()
    {
        $project = Project::where('status', 1)->orderBy('created_at', 'desc')->get();

        return response()->json([
            "status" => true,
            "data" => $project
        ]);
    }

    public function latestProject(Request $request)
    {
        $project = Project::where('status', 1)->take($request->get('limit'))->orderBy('created_at', 'desc')->get();
        return response()->json([
            "status" => true,
            "data" => $project
        ]);
    }
}
