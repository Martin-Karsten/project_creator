<?php

namespace App\Http\Controllers\Project;

use App\Models\User;
use App\Models\Project;
use App\Models\Textfield;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class TextfieldsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $user = Auth::user();
        $project = $user->projects->where('id', $id)->first();
        return $project->textfields;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $textfields = $request->data;
        foreach($textfields as $field){
            foreach($field as $f){
                   Textfield::updateOrCreate([
                    'name' => $f['name'],
                    'project_id' => $f['project_id'],
                    'text' => $f['text'],
                    'row' => $f['row'],
                    'font_size' => $f['font_size'],
                    'color' => $f['color'],
                    'top' => $f['top'],
                    'left' => $f['left'],
                    'width' => $f['width'],
                    'height' => $f['height']
                ]);
            }
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Textfield::where('id', $id)
          ->where('project_id', $request->project_id)
          ->update(['text' => $request->text]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
