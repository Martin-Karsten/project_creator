<?php

namespace App\Models\Animations;

use Illuminate\Database\Eloquent\Model;

class ChartAnimation extends Model
{
    protected $table = 'chart_animations';

    protected $fillable = [
        'name', 'chart_id', 'animation_name', 'animation_duration', 'animation_oder', 'animated'
    ];

    public function chart()
    {
        return $this->belongsTo('App\Models\Chart');
    }
}
