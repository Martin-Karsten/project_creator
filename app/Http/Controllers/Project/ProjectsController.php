<?php

namespace App\Http\Controllers\Project;

use App\Models\Project;
use App\Models\Layout;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectStoreRequest;

class ProjectsController extends Controller
{
    protected function index(){

        return Auth::user()->projects;
    }
    protected function show($id)
    {
        $project = DB::table('projects')
        ->where('projects.id', $id)
        ->join('textfields', 'projects.id', '=', 'textfields.project_id')
        ->join('images', 'projects.id', '=', 'images.project_id')
        ->join('charts', 'projects.id', '=', 'charts.project_id')
        ->join('tables', 'projects.id', '=', 'tables.project_id')
        ->join('shapes', 'projects.id', '=', 'shapes.project_id')
        ->get();
        
        return DB::table('projects')->where('projects.id', $id)->join('textfields', 'projects.id', '=', 'textfields.project_id')->get();
        
        // return $project;
        // return Auth::user()->projects->where('id', $id)->first();
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

    protected function update() {

    }

    protected function delete($id) {
        Project::destroy($id);
        // return Auth::user()->projects->where('id', $id)->delete();
    }
}
