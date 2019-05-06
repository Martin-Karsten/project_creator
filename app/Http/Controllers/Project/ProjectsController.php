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
        ->with(['textfields', 'textfields.animations'])->with(['webImages', 'webImages.animations'])->with(['images', 'images.animations'])
        ->with(['tables', 'tables.animations'])->with(['charts', 'charts.animations', 'charts.chart_settings'])
        ->with(['webVideos', 'webVideos.animations'])->get();
        
        // return DB::table('projects')
        // ->where('projects.id', $id)
        // ->get();
        
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
    }
}
