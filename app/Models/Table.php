<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Table extends Model
    {
        protected $fillable = [
            'name', 'project_id', 'text', 'columns', 'rows', 'row', 'font_size', 'color', 'top', 'left', 'width', 'height'
        ];
    
        public function project()
        {
            return $this->belongTo('App\Models\Project');
        }
        public function animations() {
            return $this->hasMany('App\Models\Animations\TextfieldAnimation');
        }
}