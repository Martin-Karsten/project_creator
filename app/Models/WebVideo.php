<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WebVideo extends Model
{
    protected $table = 'web_videos'; 
    
    protected $fillable = [
        'name', 'project_id', 'video_id', 'row', 'font_size', 'color', 'top', 'left', 'width', 'height'
    ];

    public function projectLayout(){
        return $this->belongTo('App\Models\ProjectLayout');
    }
}
