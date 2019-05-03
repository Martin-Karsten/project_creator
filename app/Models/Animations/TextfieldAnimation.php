<?php

namespace App\Models\Animations;

use Illuminate\Database\Eloquent\Model;

class TextfieldAnimation extends Model
{
    protected $table = 'textfield_animations';

    protected $fillable = [
        'name', 'textfield_id', 'animation_name', 'animation_duration', 'animation_oder', 'animated'
    ];

    public function textfield()
    {
        return $this->belongsTo('App\Models\Animations\TextfieldAnimation');
    }
}
