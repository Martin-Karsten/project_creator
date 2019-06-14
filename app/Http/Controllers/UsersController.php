<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id)->first();
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

        $user = User::find($id)->first();
        if(!empty($request->first_name)){
            $user->first_name = $request->first_name;
        }
        if(!empty($request->last_name)){
            $user->last_name = $request->last_name;
        }
        if(!empty($request->email)){
            $user->email = $request->email;
        }
        // if(!empty($request->avatar)){
            echo $request;
            // Storage::disk('images')->put('avatars/1.jpg', $request->avatar);
            // $url = Storage::url('avatars/1.jpg');
            // $user->avatar = $url;
        // }

        $user->save();
        // return $path;
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
