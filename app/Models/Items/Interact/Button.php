<?php

namespace App\Models\Items\Interact;

use Illuminate\Database\Eloquent\Model;

class Button extends Model
{
    public $incrementing = false;
    protected $fillable = [
        'id', 'name', 'project_id', 'layout_item_id', 'function', 'function_items', 'sidebarColor', 'text', 'row', 'font', 'color', 'animation_name', 'animated', 'opacity',
        'font_size', 'top', 'left', 'width', 'height', 'z_index'
    ];

    protected $casts = [
        'function_items' => 'array',
    ];

    public function layoutItem()
    {
        return $this->belongTo('App\Models\LayoutItem');
    }
}
