<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use App\Models\Service;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::OrderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $modal = new Service();
        $modal->title = $request->title;
        $modal->short_desc = $request->short_desc;
        $modal->slug = Str::slug($request->slug);
        $modal->content = $request->content;
        $modal->status = $request->status;
        $modal->save();

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null){
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $modal->id . '.' . $ext;

                $sourcepath = public_path('uploads/temp/' . $tempImage->name);
                $despath = public_path('uploads/services/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcepath);
                $image->scaleDown(1200);
                $image->save($despath);

                $modal->image = $fileName;
                $modal->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Service added successfully'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $service = Service::find($id);
        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'service not found'
            ], 404);
        }
        return response()->json([
            'status' => true,
            'data' => $service
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $service = Service::find($id);
        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found'
            ], 404);
        }
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug,' . $id . ',id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $service->title = $request->title;
        $service->short_desc = $request->short_desc;
        $service->slug = Str::slug($request->slug);
        $service->content = $request->content;
        $service->status = $request->status;
        $service->save();

        if ($request->imageId > 0) {
            $oldImage = $service->image;
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $service->id . '.' . $ext;

                $sourcepath = public_path('uploads/temp/' . $tempImage->name);
                $despath = public_path('uploads/services/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcepath);
                $image->scaleDown(1200);
                $image->save($despath);

                $service->image = $fileName;
                $service->save();
                if($oldImage != null){
                    File::delete(public_path('uploads/services/' . $oldImage));
                }
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Service updated successfully'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found'
            ], 500);
        }

        $service->delete();
        return response()->json([
            'status' => true,
            'message' => 'Service deleted successfully'
        ]);
    }
}
