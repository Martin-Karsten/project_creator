<?php

namespace App\Models\Animations;

use Illuminate\Database\Eloquent\Model;

class ShapeAnimation extends Model
{
    protected $table = 'shape_animations';

    protected $fillable = [
        'name', 'shape_id', 'animation_name', 'animation_duration', 'animation_oder', 'animated'
    ];

    public function shape()
    {
        return $this->belongsTo('App\Models\Animations\ShapeAnimation');
    }
}
