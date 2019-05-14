<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LayoutItem extends Model
{
    protected $table = 'layout_items';

    protected $fillable = [
        'project_id', 'textfield_id', 'image_id', 'web_image_id', 'table_id', 'chart_id', 'web_video_id', 'shapes_id' 
    ];

    public function projectLayout()
    {
        return $this->belongTo('App\Models\ProjectLayout');
    }

    public function textfields() {
        return $this->hasMany('App\Models\Items\Textfield');
    }
    public function images() {
        return $this->hasMany('App\Models\Items\Image');
    }
    public function webImages() {
        return $this->hasMany('App\Models\Items\WebImage');
    }
    public function webVideos() {
        return $this->hasMany('App\Models\Items\WebVideo');
    }
    public function tables() {
        return $this->hasMany('App\Models\Items\Table');
    }
    public function charts() {
        return $this->hasMany('App\Models\Items\Chart');
    }
}
