<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TempImageController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:jpg,jpeg,png'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors('image')
            ]);
        }
        $image = $request->image;

        $ext = $image->getClientOriginalExtension();
        $imageName = strtotime(now()) . '.' . $ext;

        $model = new TempImage();
        $model->name = $imageName;
        $model->save();
        $image->move(public_path('uploads/temp'), $imageName);

        $sourcepath = public_path('uploads/temp/' . $imageName);
        $despath = public_path('uploads/temp/thumb/' . $imageName);
        $manager = new ImageManager(Driver::class);
        $image = $manager->read($sourcepath);
        $image->coverDown(300, 300);
        $image->save($despath);

        return response()->json([
            'status' => true,
            'data' => $model,
            'message' => "Image uploaded successfully"
        ]);
    }
}
