<?php

namespace App\Models\Items;

use Illuminate\Database\Eloquent\Model;

class WebVideo extends Model
{
    public $incrementing = false;
    protected $table = 'web_videos'; 
    
    protected $fillable = [
        'id', 'name', 'project_id', 'layout_item_id', 'video_id', 'row','animation_name', 'animated',
        'border_color', 'border_width', 'border_style', 'border_radius', 'opacity',
        'font_size', 'color', 'top', 'left', 'width', 'height', 'z_index'
    ];

    public function layoutItem(){
        return $this->belongTo('App\Models\LayoutItem');
    }
}
