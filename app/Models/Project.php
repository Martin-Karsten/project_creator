<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    public $incrementing = false;
 /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'project_name', 'user_id', 'private'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($post) {
            $post->{$post->getKeyName()} = (string) Str::uuid();
        });
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
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
}
