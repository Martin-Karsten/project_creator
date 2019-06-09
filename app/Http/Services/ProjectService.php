<?php

namespace App\Services;

use App\Models\Project;
use App\Models\User;
use App\Models\LayoutItem;
use App\Models\Items\Textfield;
use App\Models\Items\WebImage;
use App\Models\Items\Table;
use App\Models\Items\WebVideo;
use App\Models\Items\Shape;
use App\Models\Items\Chart;
use App\Models\Items\ChartSettings;
use Auth;

class ProjectService {

    public function editTextfields(Array $arr, Array $delitedItems){

        foreach($delitedItems as $deleted){
            if (Textfield::where('id', '=', $deleted['id'])->exists()) {
                Textfield::destroy($deleted['id']);
             }
        }

        foreach($arr as $field){
            Textfield::updateOrCreate(
                ['id'=> $field['id']],
                [
                'id' => $field['id'],
                'name' => $field['name'],
                'project_id' => $field['project_id'],
                'layout_item_id' => $field['layout_item_id'],
                'text' => $field['text'],
                'row' => $field['row'],
                'font_size' => $field['font_size'],
                'font' => $field['font'],
                'color' => $field['color'],
                // 'animation_name' => $field['animation_name'],
                // 'animated' => $field['animated'],
                'background_image' => $field['background_image'],
                'background_color' => $field['background_color'],
                'border_color' => $field['border_color'],
                'border_style' => $field['border_style'],
                'border_width' => $field['border_width'],
                'border_radius' => $field['border_radius'],
                'opacity' => $field['opacity'],
                'top' => $field['top'],
                'left' => $field['left'],
                'width' => $field['width'],
                'height' => $field['height'],
                'z_index' => $field['z_index'],
            ]);
        }
    }

    public function editWebImages(Array $arr, Array $delitedItems){

        foreach($delitedItems as $deleted){
            if (WebImage::where('id', '=', $deleted['id'])->exists()) {
                WebImage::destroy($deleted['id']);
             }
        }

        foreach($arr as $field){
            WebImage::updateOrCreate(
                ['id'=> $field['id']],
                [
                'id' => $field['id'],
                'name' => $field['name'],
                'project_id' => $field['project_id'],
                'layout_item_id' => $field['layout_item_id'],
                'url' => $field['url'],
                // 'row' => $field['row'],
                // 'animation_name' => $field['animation_name'],
                // 'animated' => $field['animated'],
                'border_color' => $field['border_color'],
                'border_style' => $field['border_style'],
                'border_width' => $field['border_width'],
                'border_radius' => $field['border_radius'],
                'opacity' => $field['opacity'],
                'top' => $field['top'],
                'left' => $field['left'],
                'width' => $field['width'],
                'height' => $field['height'],
                'z_index' => $field['z_index'],
            ]);
        }
    }

    public function editTables(Array $arr, Array $delitedItems){

        foreach($delitedItems as $deleted){
            if (Table::where('id', '=', $deleted['id'])->exists()) {
                Table::destroy($deleted['id']);
             }
        }

        foreach($arr as $field){
            Table::updateOrCreate(
                ['id'=> $field['id']],
                [
                'id' => $field['id'],
                // 'name' => $field['name'],
                'project_id' => $field['project_id'],
                'layout_item_id' => $field['layout_item_id'],
                'text' => $field['text'],
                // 'row' => $field['row'],
                // 'animation_name' => $field['animation_name'],
                // 'animated' => $field['animated'],
                'rows' => $field['rows'],
                'columns' => $field['columns'],
                'border_color' => $field['border_color'],
                'border_style' => $field['border_style'],
                'border_width' => $field['border_width'],
                'border_radius' => $field['border_radius'],
                'opacity' => $field['opacity'],
                'top' => $field['top'],
                'left' => $field['left'],
                'width' => $field['width'],
                'height' => $field['height'],
                'z_index' => $field['z_index'],
            ]);
        }
    }

    public function editWebVideos(Array $arr, Array $delitedItems){

        foreach($delitedItems as $deleted){
            if (WebVideo::where('id', '=', $deleted['id'])->exists()) {
                WebVideo::destroy($deleted['id']);
             }
        }

        foreach($arr as $field){
            WebVideo::updateOrCreate(
                ['id'=> $field['id']],
                [
                'id' => $field['id'],
                'name' => $field['name'],
                'project_id' => $field['project_id'],
                'layout_item_id' => $field['layout_item_id'],
                'video_id' => $field['video_id'],
                'row' => $field['row'],
                // 'animation_name' => $field['animation_name'],
                // 'animated' => $field['animated'],
                'border_color' => $field['border_color'],
                'border_style' => $field['border_style'],
                'border_width' => $field['border_width'],
                'border_radius' => $field['border_radius'],
                'opacity' => $field['opacity'],
                'top' => $field['top'],
                'left' => $field['left'],
                'width' => $field['width'],
                'height' => $field['height'],
                'z_index' => $field['z_index'],
            ]);
        }
    }

    public function editShapes(Array $arr, Array $delitedItems){

        foreach($delitedItems as $deleted){
            if (Shape::where('id', '=', $deleted['id'])->exists()) {
                Shape::destroy($deleted['id']);
             }
        }

        foreach($arr as $field){
            Shape::updateOrCreate(
                ['id'=> $field['id']],
                [
                'id' => $field['id'],
                // 'name' => $field['name'],
                'project_id' => $field['project_id'],
                'layout_item_id' => $field['layout_item_id'],
                'shape_name' => $field['shape_name'],
                // 'row' => $field['row'],
                // 'animation_name' => $field['animation_name'],
                // 'animated' => $field['animated'],
                'background_color' => $field['background_color'],
                'border_color' => $field['border_color'],
                'border_style' => $field['border_style'],
                'border_width' => $field['border_width'],
                'border_radius' => $field['border_radius'],
                'opacity' => $field['opacity'],
                'top' => $field['top'],
                'left' => $field['left'],
                'width' => $field['width'],
                'height' => $field['height'],
                'z_index' => $field['z_index'],
            ]);
        }
    }

    public function editCharts(Array $arr, Array $delitedItems){
        foreach($arr as $field){
            Chart::updateOrCreate(
                ['id'=> $field['id']],
                [
                'id' => $field['id'],
                // 'name' => $field['name'],
                'project_id' => $field['project_id'],
                'layout_item_id' => $field['layout_item_id'],
                // 'row' => $field['row'],
                // 'animation_name' => $field['animation_name'],
                // 'animated' => $field['animated'],
                'background_color' => $field['background_color'],
                'border_color' => $field['border_color'],
                'border_style' => $field['border_style'],
                'border_width' => $field['border_width'],
                'border_radius' => $field['border_radius'],
                'opacity' => $field['opacity'],
                'top' => $field['top'],
                'left' => $field['left'],
                'width' => $field['width'],
                'height' => $field['height'],
                'z_index' => $field['z_index'],
            ]);          
            
            ChartSettings::updateOrCreate(
                ['id' => $field['chart_settings']['id']],
                [
                    'id' => $field['chart_settings']['id'],  
                    'chart_id' => $field['id'],       
                    'chart_settings' => $field['chart_settings']
                ]);
        }
    }
}