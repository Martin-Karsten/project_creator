<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Textfield extends Model
{
 /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'project_id', 'text'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        
    ];

    public function user()
    {
        return $this->belongsTo('App\Project');
    }
}
