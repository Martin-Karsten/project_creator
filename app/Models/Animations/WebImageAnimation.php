<?php

namespace App\Models\Animations;

use Illuminate\Database\Eloquent\Model;

class WebImageAnimation extends Model
{
    protected $table = 'web_image_animations';

    protected $fillable = [
        'name', 'web_image_id', 'animation_name', 'animation_duration', 'animation_oder', 'animated'
    ];

    public function webImage()
    {
        return $this->belongsTo('App\Models\Animations\WebImageAnimation');
    }
}
