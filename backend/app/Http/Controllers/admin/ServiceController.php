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
     * Display a listing of the service.
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
     * Show the form for creating a new service.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created service in storage.
     */
    public function store(Request $request)
    {
        // $request->merge(['slug' => Str::slug($request->slug)]);
        
        $slug = Str::slug(($request->slug));

        $validator = Validator::make([
            'title'=>$request->title,
            'slug'=>$slug
        ], [
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
            if ($tempImage != null) {
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
     * Display the specified service.
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
     * Show the form for editing the specified service.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified service in storage.
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

        $slug = Str::slug($request->slug);

        $validator = Validator::make([
            'title' => $request->title,
            'slug' => $slug,

        ], [
            'title' => 'required',
            'slug' => 'required|unique:services,slug,' . $id . ',id',

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
        // $service->save();

        // $service->update([
        //     'title' => $request->title,
        //     'short_desc' => $request->short_desc,
        //     'slug' => $slug,
        //     'content' => $request->content,
        //     'status' => $request->status,
        // ]);

        if ($request->imageId) {
            $oldImage = $service->image;
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage) {
                $ext = pathinfo($tempImage->name, PATHINFO_EXTENSION);
                $fileName = strtotime('now') . $service->id . '.' . $ext;

                $sourcepath = public_path('uploads/temp/' . $tempImage->name);
                $despath = public_path('uploads/services/' . $fileName);
                try {
                    $manager = new ImageManager(Driver::class);
                    $image = $manager->read($sourcepath);
                    $image->scaleDown(1200);
                    $image->save($despath);

                    $service->image = $fileName;
                    // $service->save();

                    if ($oldImage != null) {
                        File::delete(public_path('uploads/services/' . $oldImage));
                    }
                } catch (\Exception $e) {
                    return response()->json([
                        'status' => false,
                        'message' => 'Image processing failed',
                        'error' => $e->getMessage()
                    ], 500);
                }
            }
        }

        $service->save();


        return response()->json([
            'status' => true,
            'message' => 'Service updated successfully'
        ], 200);
    }

    /**
     * Remove the specified service from storage.
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
