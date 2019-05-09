<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectLayout extends Model
{
    protected $table = 'project_layouts';

    protected $fillable = [
        'project_id', 'rows', 
    ];

    public function project()
    {
        return $this->belongsTo('App\Models\Project');
    }

    public function textfields() {
        return $this->hasMany('App\Models\Textfield');
    }
    public function images() {
        return $this->hasMany('App\Models\Image');
    }
    public function webImages() {
        return $this->hasMany('App\Models\WebImage');
    }
    public function webVideos() {
        return $this->hasMany('App\Models\WebVideo');
    }
    public function tables() {
        return $this->hasMany('App\Models\Table');
    }
    public function charts() {
        return $this->hasMany('App\Models\Chart');
    }
}
