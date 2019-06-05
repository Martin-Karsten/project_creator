<?php

namespace App\Models\Items;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'id', 'name', 'project_id', 'url', 'row', 'font_size', 'color', 'top', 'left', 'width', 'height'
    ];

    public function LayoutItem(){
        return $this->belongTo('App\Models\LayoutItem');
    }
    public function animations() {
        return $this->hasMany('App\Models\Animations\ImageAnimation');
    }
}
