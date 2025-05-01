<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\TempImage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ArticleController extends Controller
{
    // show all articles
    public function index()
    {
        $article = Article::get();
        return response()->json([
            "status" => true,
            "data" => $article
        ]);
    }

    // store newly created articles
    public function store(Request $request)
    {
        $slug = Str::slug($request->slug);

        $validator = Validator::make(
            ['title' => $request->title, 'slug' => $slug],
            ['title' => 'required', 'slug' => 'required|unique:articles,slug']
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 422);
        }


        $article = new Article();
        $article->title = $request->title;
        $article->slug = $slug;
        $article->author = $request->author;
        $article->content = $request->content;
        $article->image = $request->image;
        $article->status = $request->status;

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $article->id . '.' . $ext;

                $sourcepath = public_path('uploads/temp/' . $tempImage->name);
                $despath = public_path('uploads/articles/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcepath);
                $image->scaleDown(1200);
                $image->save($despath);

                $article->image = $fileName;
            }
        }
        $article->save();

        return response()->json([
            'status' => true,
            'message' => 'Article added successfully'
        ]);
    }

    // update articles 
    public function update(Request $request, $id)
    {
        $article = Article::find($id);
        if (!$article) {

            return response()->json([
                "status" => false,
                "message" => "Article not found"
            ]);
        }

        $slug = Str::slug($request->slug);
        $validator = Validator::make(
            ['title' => $request->title, 'slug' => $slug],
            ['title' => 'required', 'slug' => 'required|unique:articles,slug']
        );

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' => $validator->errors()
            ], 422);
        }

        $article->title = $request->title;
        $article->slug = $slug;
        $article->author = $request->author;
        $article->content = $request->content;
        $article->image = $request->image;
        $article->status = $request->status;

        if ($request->imageId) {
            $oldImage = $article->image;
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage) {
                $ext = pathinfo($tempImage->name, PATHINFO_EXTENSION);
                $fileName = strtotime('now') . $article->id . '.' . $ext;

                $sourcepath = public_path('uploads/temp/' . $tempImage->name);
                $despath = public_path('uploads/articles/' . $fileName);
                try {
                    $manager = new ImageManager(Driver::class);
                    $image = $manager->read($sourcepath);
                    $image->scaleDown(1200);
                    $image->save($despath);

                    $article->image = $fileName;
                    // $article->save();

                    if ($oldImage != null) {
                        File::delete(public_path('uploads/articles/' . $oldImage));
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

        $article->save();

        return response()->json([
            "status" => true,
            "data" => "Article updated successfully"
        ]);
    }

    // show specific article
    public function show($id)
    {
        $article = Article::find($id);
        if (!$article) {
            return response()->json([
                "status" => false,
                "message" => "Article not found"
            ]);
        }
        return response()->json([
            "status" => true,
            "data" => $article
        ]);
    }

    // delete article 
    public function destroy($id)
    {
        $article = Article::find($id);
        if (!$article) {
            return response()->json([
                "status" => false,
                "message" => "Article not found"
            ]);
        }

        $article->delete();

        return response()->json([
            "status" => true,
            "data" => "Article deleted successfully"
        ]);
    }
}
