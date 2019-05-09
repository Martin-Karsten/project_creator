<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chart extends Model
{
    protected $fillable = [
        'name', 'project_id', 'row', 'font_size', 'color', 'top', 'left', 'width', 'height'
    ];

    public function projectLayout()
    {
        return $this->belongTo('App\Models\ProjectLayout');
    }
    public function animations() {
        return $this->hasOne('App\Models\Animations\TextfieldAnimation');
    }
    public function chartSettings(){
        return $this->hasOne('App\Models\ChartSettings');
    }
}
