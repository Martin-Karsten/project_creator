<?php

namespace App\Http\Controllers\Project;

use App\Models\Project;
use App\Models\ProjectLayout;
use App\Models\LayoutItem;
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
        return LayoutItem::where('project_id',$id)->with('textfields')->with('images')->with('webImages')->with('tables')->with('charts')->with('webVideos')->get();

        // return ProjectLayout::where([['project_id', '=', $id]])->layoutItems;
            // ->with('projectLayout')->with(['projectLayout.textfields', 'projectLayout.textfields.animations'])
            // ->with('projectLayout')->with(['projectLayout.webImages', 'projectLayout.webImages.animations'])
            // ->get();
    }
    protected function create(ProjectStoreRequest $request)
    {
        $validated = $request->validated();

        $project = Project::create([
                'project_name' => $request->project_name,
                'user_id' => $request->user_id,
                'private' => $request->private
            ]);

        $layout = ProjectLayout::create([
                'project_id' => $project->id
            ]);
        
       return LayoutItem::create([
            'project_id' => $project->id
        ]);
    }

    protected function update() {

    }

    protected function delete($id) {
        Project::destroy($id);
    }
}
