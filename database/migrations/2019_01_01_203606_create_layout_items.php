<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLayoutItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('layout_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('project_id');
            $table->unsignedBigInteger('textfield_id')->nullable();
            $table->unsignedBigInteger('image_id')->nullable();
            $table->unsignedBigInteger('web_image_id')->nullable();
            $table->unsignedBigInteger('table_id')->nullable();
            $table->unsignedBigInteger('chart_id')->nullable();
            $table->unsignedBigInteger('web_video_id')->nullable();
            $table->unsignedBigInteger('shapes_id')->nullable();
            $table->timestamps();

            $table->foreign('project_id')
            ->references('project_id')
            ->on('project_layouts')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('layout_items');
    }
}
