<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Textfield extends Model
{
    //

    public function project()
    {
        return $this->belongTo('App\Models\Project');
    }
}
