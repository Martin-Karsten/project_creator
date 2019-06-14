<?php

namespace App\Http\Controllers\Project;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\Project;

class ProjectImageController extends Controller
{
    protected function store(){
        
    }

    protected function update(Request $request){
        $project = Project::find($request->id);

        $image = $request->image;  // your base64 encoded
        $image = str_replace('data:image/png;base64,', '', $image);
        $image = str_replace(' ', '+', $image);

        $name = 'images/'. $request->id . '-thumbnail.png';
        Storage::disk('public')->put($name, base64_decode($image));

        $project->image = $name;
        $project->save();
    }
}
