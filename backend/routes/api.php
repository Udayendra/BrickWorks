<?php

use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\TestimonialController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\front\ViewArticleController;
use App\Http\Controllers\front\ViewProjectController;
use App\Http\Controllers\front\ViewServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('authenticate', [AuthenticationController::class, 'authenticate']);

// get services
Route::get('view-service', [ViewServiceController::class, 'index']);
Route::get('latest-service', [ViewServiceController::class, 'latestService']);

// get projects
Route::get('view-project', [ViewProjectController::class, 'index']);
Route::get('latest-project', [ViewProjectController::class, 'latestProject']);

// get Articles
Route::get('view-article', [ViewArticleController::class, 'index']);
Route::get('latest-article', [ViewArticleController::class, 'latestArticle']);


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::get('logout', [AuthenticationController::class, 'logout']);

    // temp-image api
    Route::post('temp-image', [TempImageController::class, 'store']);

    // services api
    Route::post('services', [ServiceController::class, 'store']);
    Route::get('services', [ServiceController::class, 'index']);
    Route::put('services/{id}', [ServiceController::class, 'update']);
    Route::get('services/{id}', [ServiceController::class, 'show']);
    Route::delete('services/{id}', [ServiceController::class, 'destroy']);

    // project api
    Route::post('projects', [ProjectController::class, 'store']);
    Route::get('projects', [ProjectController::class, 'index']);
    Route::put('projects/{id}', [ProjectController::class, 'update']);
    Route::get('projects/{id}', [ProjectController::class, 'show']);
    Route::delete('projects/{id}', [ProjectController::class, 'destroy']);

    // articles api 
    Route::get('articles', [ArticleController::class, 'index']);
    Route::post('articles', [ArticleController::class, 'store']);
    Route::put('articles/{id}', [ArticleController::class, 'update']);
    Route::get('articles/{id}', [ArticleController::class, 'show']);
    Route::delete('articles/{id}', [ArticleController::class, 'destroy']);

    // testimonial api
    Route::get('testimonials', [TestimonialController::class, 'index']);
    Route::get('testimonials/{id}', [TestimonialController::class, 'show']);
    Route::post('testimonials', [TestimonialController::class, 'store']); 
    Route::put('testimonials/{id}', [TestimonialController::class, 'update']);
    Route::delete('testimonials/{id}', [TestimonialController::class, 'destroy']);
});
