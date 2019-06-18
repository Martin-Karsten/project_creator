<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateButtonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buttons', function (Blueprint $table) {
            $table->string('id');
            $table->string('text')->default('Button');
            $table->string('name', 100)->default('default')->nullable();
            $table->string('project_id');
            $table->string('layout_item_id');
            $table->string('function')->nullable();
            $table->json('function_items')->nullable();
            $table->unsignedTinyInteger('row')->default(0);
            $table->string('animation_name', 25)->nullable();
            $table->boolean('animated')->default(false);
            $table->unsignedSmallInteger('font_size')->default(18);
            $table->unsignedSmallInteger('top')->default(1);
            $table->unsignedSmallInteger('left')->default(1);
            $table->unsignedSmallInteger('width')->default(150);
            $table->unsignedSmallInteger('height')->default(50);
            $table->unsignedSmallInteger('z_index')->default(0);
            $table->string('color',100)->default('transparent');
            $table->string('sidebarColor')->default('transparent');
            $table->double('opacity', 3, 2)->default(1);
            $table->timestamps();

            $table->foreign('layout_item_id')
            ->references('id')
            ->on('layout_items')
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
        Schema::dropIfExists('buttons');
    }
}
