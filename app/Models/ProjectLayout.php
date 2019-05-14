<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectLayout extends Model
{
    protected $primaryKey = 'project_id';
    protected $table = 'project_layouts';

    protected $fillable = [
        'project_id', 'rows', 
    ];

    public function project()
    {
        return $this->belongsTo('App\Models\Project');
    }
    public function layoutItems()
    {
        return $this->hasMany('App\Models\LayoutItem');
    }
}
