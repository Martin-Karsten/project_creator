<?php

namespace App\Models\General;


use Illuminate\Database\Eloquent\Model;

class BugReport extends Model
{
    protected $table = 'bug_reports';

    protected $fillable = [
        'id', 'user_id', 'bug_subject', 'bug_cause', 'bug_explanation', 'bug_fixed'
    ];

    public function user(){
        return $this->belongsTo('App/Models/User');
    }
}
