<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use App\Models\TempImage;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;

class ProjectController extends Controller
{
    //view all projects
    public function index()
    {
        $project = Project::OrderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $project
        ]);
    }

    // store method 
    public function store(Request $request)
    {
        $request->merge(['slug' => Str::slug($request->slug)]);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:projects,slug'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $project = new Project();
        $project->title = $request->title;
        $project->slug = $request->slug;
        $project->short_desc = $request->short_desc;
        $project->content = $request->content;
        $project->construction_type = $request->construction_type;
        $project->sector = $request->sector;
        $project->location = $request->location;
        $project->image = $request->image;
        $project->status = $request->status;


        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null){
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $project->id . '.' . $ext;

                $sourcepath = public_path('uploads/temp/' . $tempImage->name);
                $despath = public_path('uploads/projects/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcepath);
                $image->scaleDown(1200);
                $image->save($despath);

                $project->image = $fileName;
                // $project->save();
            }
        }
        $project->save();
        return response()->json([
            'status' => true,
            'message' => 'Project added sucessfully'
        ]);
    }

    public function update(Request $request, $id)
    {
        $project = Project::Find($id);
        if (!$project) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);
        }
        // $request->merge(['slug' => Str::slug($request->slug)]);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:projects,slug'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ]);
        }

        $project->title = $request->title;
        $project->slug = $request->slug;
        $project->short_desc = $request->short_desc;
        $project->content = $request->content;
        $project->construction_type = $request->construction_type;
        $project->sector = $request->sector;
        $project->location = $request->location;
        $project->image = $request->image;
        $project->status = $request->status;
        // $project->save();

        if ($request->imageId > 0) {
            $oldImage = $project->image;
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $project->id . '.' . $ext;

                $sourcepath = public_path('uploads/temp/' . $tempImage->name);
                $despath = public_path('uploads/projects/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcepath);
                $image->scaleDown(1200);
                $image->save($despath);

                $project->image = $fileName;
                if ($oldImage != null) {
                    File::delete(public_path('uploads/services/' . $oldImage));
                }
            }
        }
        $project->save();

        return response()->json([
            'status' => true,
            'data' => $project
        ]);
    }

    public function show($id)
    {
        $project = Project::Find($id);
        if (!$project) {
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $project
        ]);
    }

    public function destroy($id)
    {
        $project = Project::find($id);

        if (!$project) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found'
            ], 500);
        }

        $project->delete();
        return response()->json([
            'status' => true,
            'message' => 'Service deleted successfully'
        ]);
    }
}
