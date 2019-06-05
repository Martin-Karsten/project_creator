<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    //User Settings
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::patch('settings/profile', 'Settings\ProfileController@update');
    Route::patch('settings/password', 'Settings\PasswordController@update');

    //Project Settings
    Route::get('/user/projects', 'Project\ProjectsController@index');

    // Route::resource('project', 'ProjectsController');
    Route::get('user/project/{id}', 'Project\ProjectsController@show');
    Route::post('user/project/create', 'Project\ProjectsController@create');
    Route::patch('user/project/{id}/update', 'Project\ProjectsController@update');
    Route::put('user/project/{id}/updateLayout', 'Project\ProjectsController@updateLayout');
    Route::delete('user/project/{id}/delete', 'Project\ProjectsController@delete');
    Route::post('user/projects/delete', 'Project\ProjectsController@deleteMultiple');   //post multiple projects and delete them

    //Project Components
        //Textfields
        Route::get('/user/project/{id}/textfields', 'Project\TextfieldsController@index');
        Route::put('user/project/{id}/textfields', 'Project\TextfieldsController@store');

        //Images
        Route::get('/user/project/{id}/images', 'Project\ImagesController@index');
        Route::put('user/project/{id}/images', 'Project\ImagesController@store');

        //WebImages
        Route::get('/user/project/{id}/web-images', 'Project\WebImagesController@index');
        Route::put('/user/project/{id}/web-images, Project\WebImagesController@store');
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');

    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    Route::post('oauth/{provider}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{provider}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
});
