<?php

namespace App\Models\Items;

use Illuminate\Database\Eloquent\Model;

class Chart extends Model
{
    protected $fillable = [
        'id', 'name', 'project_id', 'layout_item_id','row', 'animation_name', 'animated',
        'background_image', 'background_color', 'border_color', 'border_width', 'border_style', 'border_radius', 'opacity',
        'top', 'left', 'width', 'height', 'z_index'
    ];

    public function layoutItem()
    {
        return $this->belongTo('App\Models\LayoutItem');
    }
    public function animations() {
        return $this->hasOne('App\Models\Animations\TextfieldAnimation');
    }
    public function chartSettings(){
        return $this->hasOne('App\Models\Items\ChartSettings', 'id');
    }
}
