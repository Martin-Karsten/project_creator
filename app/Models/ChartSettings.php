<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChartSettings extends Model
{
    public function chart()
    {
        return $this->belongsTo('App\Models\Chart');
    }
}
