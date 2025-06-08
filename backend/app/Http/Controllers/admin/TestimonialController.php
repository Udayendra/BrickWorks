<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;


class TestimonialController extends Controller
{
    public function index()
    {
        $testimonial = Testimonial::where('status', 1)->orderBy('created_at', 'desc')->get();
        return response()->json(
            [
                'status' => true,
                'data' => $testimonial
            ],
            200
        );
    }

    public function show($id)
    {
        $testimonial = Testimonial::find($id);

        if (!$testimonial) {
            return  response()->json(
                [
                    'status' => false,
                    'message' => 'testimonial not found'
                ],
                404
            );
        }

        return response()->json(
            [
                'status' => true,
                'data' => $testimonial
            ],
            200
        );
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            [
                'testimonial' => $request->testimonial,
                'citation' => $request->citation
            ],
            [
                'testimonial' => 'required',
                'citation' => 'required'
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $testimonial = new Testimonial();
        $testimonial->testimonial = $request->testimonial;
        $testimonial->citation = $request->citation;

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $testimonial->id . '.' . $ext;

                $sourcepath = public_path('uploads/temp/' . $tempImage->name);
                $despath = public_path('uploads/testimonials/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcepath);
                $image->coverDown(300, 300);
                $image->save($despath);

                $testimonial->image = $fileName;
            }
        }

        $testimonial->save();

        return response()->json(
            [
                'status' => true,
                'message' => 'Testimonial added successfully'
            ],
            200
        );
    }

    public function update(Request $request, $id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {

            return response()->json([
                "status" => false,
                "message" => "testimonial not found"
            ]);
        }

        $validator = Validator::make(
            ['testimonial' => $request->testimonial, 'citation' => $request->citation],
            ['testimonial' => 'required', 'citation' => 'required']
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $testimonial->testimonial = $request->testimonial;
        $testimonial->citation = $request->citation;

        if ($request->imageId) {
            $oldImage = $testimonial->image;
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage) {
                $ext = pathinfo($tempImage->name, PATHINFO_EXTENSION);
                $fileName = strtotime('now') . $testimonial->id . '.' . $ext;

                $sourcepath = public_path('uploads/temp/' . $tempImage->name);
                $despath = public_path('uploads/testimonials/' . $fileName);
                try {
                    $manager = new ImageManager(Driver::class);
                    $image = $manager->read($sourcepath);
                    $image->coverDown(300, 300);
                    $image->save($despath);

                    $testimonial->image = $fileName;
                    // $testimonial->save();

                    if ($oldImage != null) {
                        File::delete(public_path('uploads/testimonials/' . $oldImage));
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

        $testimonial->save();

        return response()->json([
            "status" => true,
            "data" => "Testimonial updated successfully"
        ]);
    }

    public function destroy($id)
    {
        $testimonial = Testimonial::find($id);
        if (!$testimonial) {
            return response()->json([
                "status" => false,
                "message" => "Testimonial not found"
            ]);
        }

        $testimonial->delete();

        return response()->json([
            "status" => true,
            "data" => "Testimonial deleted successfully"
        ]);
    }
}
