<?php

namespace App\Models\Animations;

use Illuminate\Database\Eloquent\Model;

class TableAnimation extends Model
{
    protected $table = 'web_image_animations';

    protected $fillable = [
        'name', 'table_id', 'animation_name', 'animation_duration', 'animation_oder', 'animated'
    ];

    public function table()
    {
        return $this->belongsTo('App\Models\Animations\TableAnimation');
    }
}
