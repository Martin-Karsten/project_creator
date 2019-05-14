<?php

namespace App\Models\Items;

use Illuminate\Database\Eloquent\Model;

class Table extends Model
    {
        protected $fillable = [
            'name', 'project_id', 'text', 'columns', 'rows', 'row', 'font_size', 'color', 'top', 'left', 'width', 'height'
        ];
    
        public function layoutItem()
        {
            return $this->belongTo('App\Models\LayoutItem');
        }
        public function animations() {
            return $this->hasMany('App\Models\Animations\TextfieldAnimation');
        }
}
