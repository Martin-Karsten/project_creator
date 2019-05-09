<?php

namespace App\Http\Controllers\Project;

use App\Models\Project;
use App\Models\ProjectLayout;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectStoreRequest;

class ProjectsController extends Controller
{
    protected function index(){

        $projects = Auth::user()->projects()->latest('updated_at')->paginate(17);

        $response = [
            'pagination' => [
                'total' => $projects->total(),
                'per_page' => $projects->perPage(),
                'current_page' => $projects->currentPage(),
                'last_page' => $projects->lastPage(),
                'from' => $projects->firstItem(),
                'to' => $projects->lastItem()
            ],
            'data' => $projects
        ];
        return response()->json($response);
    }
    protected function show($id)
    {
        return Project::where([['user_id', '=', 1], ['id', '=', $id]])
            ->with('projectLayout')->with(['projectLayout.textfields', 'projectLayout.textfields.animations'])
            ->with('projectLayout')->with(['projectLayout.webImages', 'projectLayout.webImages.animations'])
            ->with('projectLayout')->with(['projectLayout.images', 'projectLayout.images.animations'])
            ->with('projectLayout')->with(['projectLayout.tables', 'projectLayout.tables.animations'])
            ->with('projectLayout')->with(['projectLayout.charts', 'projectLayout.charts.animations'])
            ->with('projectLayout')->with(['projectLayout.webVideos', 'projectLayout.webVideos.animations'])
            ->get();
        
        // return DB::table('projects')
        // ->where('projects.id', $id)
        // ->get();
        
    }
    protected function create(ProjectStoreRequest $request)
    {
        $validated = $request->validated();

        $project =    Project::create([
                'project_name' => $request->project_name,
                'user_id' => $request->user_id,
                'private' => $request->private
            ]);

        print_r($project);

        return ProjectLayout::create([
            'project_id' => $project->id
        ]);
    }

    protected function update() {

    }

    protected function delete($id) {
        Project::destroy($id);
    }
}
