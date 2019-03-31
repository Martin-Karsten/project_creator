<?php

namespace App\Http\Controllers\Project;

use App\Project;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectStoreRequest;

class ProjectsController extends Controller
{
    protected function index(){
        return Auth::user()->projects;
    }
    protected function show($id)
    {
        echo Auth::user()->projects->where('id', $id);
    }
    protected function create(ProjectStoreRequest $request)
    {
        $validated = $request->validated();

        return Project::create([
            'project_name' => $request->project_name,
            'user_id' => $request->user_id,
            'private' => $request->private
        ]);
    }
}
