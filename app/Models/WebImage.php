<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WebImage extends Model
{
    protected $table = 'web_images';

    protected $fillable = [
        'name', 'project_id', 'url', 'row', 'font_size', 'color', 'top', 'left', 'width', 'height'
    ];

    public function projectLayout(){
        return $this->belongTo('App\Models\ProjectLayout');
    }
    public function animations() {
        return $this->hasMany('App\Models\Animations\WebImage');
    }
}
