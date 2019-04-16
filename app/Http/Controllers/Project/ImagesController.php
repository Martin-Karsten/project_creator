<?php

namespace App\Http\Controllers\Project;

use App\Models\User;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Storage;

class ImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // echo Storage::disk('images')->get('twice.jpg');
        // $project = $user->projects->where('id', $id)->first();
        // return $user;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        dd($request);
        // if(count($request->images)){
            foreach($request->images as $image){
                $image->store('images');
            }
        // }
        // echo $request;
        // {
        //     $images = $request->data;
        //     foreach($iamges as $image){
        //         foreach($field as $f){
        //                 Textfield::updateOrCreate([
        //                 'name' => $f['name'],
        //                 'project_id' => $f['project_id'],
        //                 'file' => $f['file'],
        //                 'url' => $f['url'],
        //                 'row' => $f['row'],
        //                 'font_size' => $f['font_size'],
        //                 'color' => $f['color'],
        //                 'top' => $f['top'],
        //                 'left' => $f['left'],
        //                 'width' => $f['width'],
        //                 'height' => $f['height']
        //             ]);
        //         }
        //     }
        // }

        return response()->json([
            "message" => "Done"
        ]);
        // {
        //     $images = $request->data;
        //     foreach($iamges as $image){
        //         foreach($field as $f){
        //                 Textfield::updateOrCreate([
        //                 'name' => $f['name'],
        //                 'project_id' => $f['project_id'],
        //                 'file' => $f['file'],
        //                 'url' => $f['url'],
        //                 'row' => $f['row'],
        //                 'font_size' => $f['font_size'],
        //                 'color' => $f['color'],
        //                 'top' => $f['top'],
        //                 'left' => $f['left'],
        //                 'width' => $f['width'],
        //                 'height' => $f['height']
        //             ]);
        //         }
        //     }
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
