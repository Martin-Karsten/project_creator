<?php

namespace App\Http\Controllers\Project;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\User;
use App\Models\Project;
use Illuminate\Support\Facades\Auth;

class WebImagesController extends Controller
{
    public function index($id){
        $user = Auth::user();
        $project = $user->projects->where('id', $id)->first();
        return $project->webImages;
    }

    public function store(Request $request)
    {
        {
            $images = $request->data;
            foreach($iamges as $image){
                foreach($image as $i){
                        WebImage::updateOrCreate([
                        'name' => $i['name'],
                        'project_id' => $i['project_id'],
                        'url' => $i['url'],
                        'row' => $i['row'],
                        'font_size' => $i['font_size'],
                        'color' => $i['color'],
                        'top' => $i['top'],
                        'left' => $i['left'],
                        'width' => $i['width'],
                        'height' => $i['height']
                    ]);
                }
            }
        }
    }
}
