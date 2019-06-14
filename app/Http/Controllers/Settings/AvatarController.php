<?php

namespace App\Http\Controllers\Settings;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class AvatarController extends Controller
{

    public function store(Request $request){
        $user = $request->user();

        $path = Storage::disk('public')->path($user->avatar);

        if($user->avatar != 'images/avatars/default-user.jpg') 
        unlink($path);

        $image = Storage::disk('public')->putFile('images/avatars', $request->image);
        $user->avatar = $image;
        $user->save();

        return $user;
    }

    public function update(Request $request){
        return $user;
    }
}
