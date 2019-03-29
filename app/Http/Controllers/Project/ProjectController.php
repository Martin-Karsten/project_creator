<?php

namespace App\Http\Controllers\Project;

use App\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectStoreRequest;

class ProjectController extends Controller
{
    protected function create(ProjectStoreRequest $request)
    {
        $validated = $request->validated();

        
        return Project::create([
            'project_name' => $request->projectName,
            'user_id' => $request->userId,
            'private' => $request->private
        ]);
    }
}
