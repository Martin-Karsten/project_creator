<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Textfield extends Model
{
    protected $fillable = [
        'name', 'project_id', 'text', 'row', 'font_size', 'color', 'top', 'left', 'width', 'height'
    ];

    public function project()
    {
        return $this->belongTo('App\Models\Project');
    }
}
