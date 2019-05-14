<?php

namespace App\Models\Items;

use Illuminate\Database\Eloquent\Model;

class Textfield extends Model
{
    protected $fillable = [
        'name', 'project_id', 'text', 'row', 'font_size', 'color', 'top', 'left', 'width', 'height'
    ];

    public function layoutItem()
    {
        return $this->belongTo('App\Models\LayoutItem');
    }
    public function animations() {
        return $this->hasOne('App\Models\Animations\TextfieldAnimation');
    }
}
