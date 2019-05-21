<?php

namespace App\Models\Items;

use Illuminate\Database\Eloquent\Model;

class Shape extends Model
{
    protected $fillable = [
        'name', 'project_id', 'shape_name', 'color', 'top', 'left', 'width', 'height'
    ];

    public function layoutItem()
    {
        return $this->belongTo('App\Models\LayoutItem');
    }
    public function animations() {
        return $this->hasOne('App\Models\Animations\ShapeAnimation');
    }
}
