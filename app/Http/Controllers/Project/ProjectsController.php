<?php

namespace App\Http\Controllers\Project;

use App\Models\Project;
use App\Models\LayoutItem;
use App\Models\User;
use App\Models\Items\Textfield;
use App\Models\Items\WebImage;
use App\Models\Items\Table;
use App\Models\Items\WebVideo;
use App\Models\Items\Shape;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\ProjectStoreRequest;
use App\Services\ProjectService;

class ProjectsController extends Controller
{
    protected $projectService;

    public function __construct(ProjectService $projectService)
    {
        $this->projectService = $projectService;
    }

    protected function index(){

        $projects = Auth::user()->projects()->latest('updated_at')->simplePaginate(18);

        return $projects;
    }
    protected function show($id)
    {
        return LayoutItem::where('project_id',$id)->with('textfields')->with('images')->with('webImages')->with('tables')
        ->with(['charts', 'charts.chartSettings'])
        ->with('webVideos')->with('shapes')->get();
    }
    protected function create(ProjectStoreRequest $request)
    {
        $validated = $request->validated();

        $project = Project::where('project_name',$request->project_name)->first();
        if(!$project){
            $project = Project::create([
                'project_name' => $request->project_name,
                'user_id' => $request->user_id,
                'private' => $request->private
            ]);
        }
        // Name already exists, append new number until name does not exist
        else{
            $found = false;
            $str = $request->project_name;
            $num = 1;
            while(!$found){
                if (Project::where('project_name', $str .' (' . $num . ')'  )->exists()) {
                    $num += 1;
                }
                else{
                    $project = Project::create([
                        'project_name' => $str .' (' . $num . ')',
                        'user_id' => $request->user_id,
                        'private' => $request->private
                    ]);
                    $found = true;
                }
            }
        }

       return LayoutItem::create([
            'id' => (string) Str::uuid(),
            'project_id' => $project->id
        ]);
    }

    protected function updateLayout(Request $request) {
        $textfields = $request->data['textfields'];
        $web_images = $request->data['web_images'];
        $tables = $request->data['tables'];
        $charts = $request->data['charts'];
        $web_videos = $request->data['web_videos'];
        $shapes = $request->data['shapes'];
        $deletedLayoutItems = $request->data['deletedLayoutItems'];

        $layouts = $request->data['layouts'];
        $id = $request->data['projectId'];

        //save layout items
        if(!empty($deletedLayoutItems['layouts'])){
            foreach($deletedLayoutItems['layouts'] as $deleted){
                print_r($deletedLayoutItems['layouts']);
                echo $deleted;
                if(LayoutItem::where('id', $deleted)->exists()){
                    LayoutItem::destroy($deleted);
                }
            }
        }

        foreach($layouts as $layout){
            LayoutItem::updateOrCreate(
                ['id' => $layout],
                [
                    'id' => $layout,
                    'project_id' => $id
                ]
            );
        }

        if(!empty($textfields) || !empty($deletedLayoutItems['textfields'])){
            $this->projectService->editTextfields($textfields, $deletedLayoutItems['textfields']);
        }

        if(!empty($web_images) || !empty($deletedLayoutItems['web_images'])){
            $this->projectService->editWebImages($web_images, $deletedLayoutItems['web_images']);
        }

        if(!empty($tables || !empty($deletedLayoutItems['tables']))){
            $this->projectService->editTables($tables, $deletedLayoutItems['tables']);
        }

        if(!empty($web_videos || !empty($deletedLayoutItems['web_videos']))){
            $this->projectService->editWebVideos($web_videos, $deletedLayoutItems['web_videos']);
        }

        if(!empty($shapes) || !empty($deletedLayoutItems['shapes'])){
            $this->projectService->editShapes($shapes, $deletedLayoutItems['shapes']);
        }


        if(!empty($charts) || !empty($deletedLayoutItems['charts'])){
            $this->projectService->editCharts($charts, $deletedLayoutItems['charts']);
        }

        Project::where('id', $id)->update(['updated_at' => Carbon::now()->toDateTimeString()]);

    }

    protected function update($id, Request $request) {
        $project = Project::findOrFail($id)->update(['project_name' => $request->project_name]);
    }

    protected function delete($id) {
        //delete the coresponding project thumbnail image as well
        $project = Project::find($id);
        $shortPath = $project->image;
        $path = Storage::disk('public')->path($project->image);
        
        if($shortPath =! null && $shortPath != '/images/default-project-image.png'){
            unlink($path);
        }
        Project::destroy($id);
    }

    protected function deleteMultiple(Request $request){
        if(sizeof($request->projects) <= 0){
            return 'empty array';
        }

        foreach($request->projects as $p){
            $project = Project::find($p);
            $shortPath = $project->image;
            $path = Storage::disk('public')->path($project->image);
            
            if($shortPath =! null && $shortPath != '/images/default-project-image.png'){
                unlink($path);
            }
            Project::destroy($p);
        }

        return 'success';
    }
}
