<?php

namespace App\Models\Animations;

use Illuminate\Database\Eloquent\Model;

class ImageAnimation extends Model
{
    protected $table = 'image_animations';

    protected $fillable = [
        'name', 'image_id', 'animation_name', 'animation_duration', 'animation_oder', 'animated'
    ];

    public function image()
    {
        return $this->belongsTo('App\Models\Animations\ImageAnimation');
    }
}
