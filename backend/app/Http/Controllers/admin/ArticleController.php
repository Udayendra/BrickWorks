<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
                'errors' => $validator->errors()
            ], 422);
        }


        $article = new Article();
        $article->title = $request->title;
        $article->slug = $slug;
        $article->author = $request->author;
        $article->content = $request->content;
        $article->image = $request->image;
        $article->status = $request->status;
        $article->save();

        return response()->json([
            'status' => true,
            'message' => 'Article added successfully'
        ]);
    }

    // update articles 
    public function update() {}

    // show specific article
    public function show() {}

    // delete article 
    public function destroy() {}
}
