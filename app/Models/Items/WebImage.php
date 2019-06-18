<?php

namespace App\Models\Items;

use Illuminate\Database\Eloquent\Model;

class WebImage extends Model
{
    public $incrementing = false;
    protected $table = 'web_images';

    protected $fillable = [
        'id', 'name', 'project_id', 'layout_item_id', 'url', 'row', 'font', 'color', 'animation_name', 'animated',
        'background_image', 'background_color', 'border_color', 'border_width', 'border_style', 'border_radius', 'opacity',
        'font_size', 'color', 'top', 'left', 'width', 'height', 'z_index'
    ];

    public function layoutItem(){
        return $this->belongTo('App\Models\LayoutItem');
    }
    public function animations() {
        return $this->hasMany('App\Models\Animations\WebImage');
    }
}
