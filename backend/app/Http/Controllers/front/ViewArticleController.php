<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ViewArticleController extends Controller
{
    public function index()
    {
        $article = Article::where('status', 1)->orderBy('created_at', 'desc')->get();
        return response()->json([
            "status" => true,
            "data" => $article
        ]);
    }

    public function latestArticle(Request $request)
    {
        $article = Article::where('status', 1)->take($request->get('limit'))->orderBy('created_at', 'desc')->get();
        return response()->json([
            "status" => true,
            "data" => $article
        ]);
    }
}
