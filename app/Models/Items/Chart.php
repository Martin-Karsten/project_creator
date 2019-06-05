<?php

namespace App\Models\Items;

use Illuminate\Database\Eloquent\Model;

class Chart extends Model
{
    protected $fillable = [
        'id', 'name', 'project_id', 'row', 'font_size', 'color', 'top', 'left', 'width', 'height'
    ];

    public function layoutItem()
    {
        return $this->belongTo('App\Models\LayoutItem');
    }
    public function animations() {
        return $this->hasOne('App\Models\Animations\TextfieldAnimation');
    }
    public function chartSettings(){
        return $this->hasOne('App\Models\ChartSettings');
    }
}
