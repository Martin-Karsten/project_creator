<?php

namespace App\Http\Controllers\General;

use App\Http\Requests\General\BugReportStoreRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\General\BugReport;

class BugReportsController extends Controller
{
    protected function index(){

    }

    protected function show($id){
        
    }

    protected function store(BugReportStoreRequest $request){

        $validated = $request->validated();
        $id = Auth::id();

        BugReport::create([
            'user_id' => $id,
            'bug_subject' => $validated['bug_subject'],
            'bug_cause' => $validated['bug_cause'],
            'bug_explanation' => $validated['bug_explanation']
        ]);
    }
}
