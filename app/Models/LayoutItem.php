<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LayoutItem extends Model
{
    public $incrementing = false;
    protected $table = 'layout_items';

    protected $fillable = [
        'id', 'project_id', 'textfield_id', 'image_id', 'web_image_id', 'table_id', 'chart_id', 'web_video_id', 'shapes_id' 
    ];

    public function project()
    {
        return $this->belongTo('App\Models\Project');
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
    public function shapes() {
        return $this->hasMany('App\Models\Items\Shape');
    }
    public function buttons() {
        return $this->hasMany('App\Models\Items\Interact\Button');
    }
}
