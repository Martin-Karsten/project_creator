<?php

namespace App\Services;

use App\Models\Project;
use App\Models\User;
use App\Models\Textfield;
use Auth;

class ProjectService {

public static function editProject($user_id, $project_id, $data){
        $user = User::where('id', '=', $user_id)->first();
        
        $textfields = $request->data;
        foreach($textfields as $field){
            foreach($field as $f){
                   Textfield::updateOrCreate([
                    'name' => $f['name'],
                    'project_id' => $f['project_id'],
                    'text' => $f['text'],
                    'row' => $f['row'],
                    'font_size' => $f['font_size'],
                    'color' => $f['color'],
                    'top' => $f['top'],
                    'left' => $f['left'],
                    'width' => $f['width'],
                    'height' => $f['height']
                ]);
            }
        }
    }
}