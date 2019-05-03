<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'name', 'project_id', 'url', 'row', 'font_size', 'color', 'top', 'left', 'width', 'height'
    ];

    public function projects(){
        return $this->belongTo('App\Models\Project');
    }
    public function animations() {
        return $this->hasMany('App\Models\Animations\ImageAnimation');
    }
}
