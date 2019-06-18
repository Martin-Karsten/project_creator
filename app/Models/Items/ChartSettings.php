<?php

namespace App\Models\Items;

use Illuminate\Database\Eloquent\Model;

class ChartSettings extends Model
{
    public $incrementing = false;
    protected $table = 'chart_settings';

    protected $fillable = [
        'id', 'chart_id', 'chart_settings'
    ];

    protected $casts = [
        'chart_settings' => 'array',
    ];

    public function chart()
    {
        return $this->belongsTo('App\Models\Items\Chart', 'id');
    }
}
