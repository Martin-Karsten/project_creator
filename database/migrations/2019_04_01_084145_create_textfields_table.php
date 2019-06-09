<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTextfieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('textfields', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('name', 100)->default('default');
            $table->string('project_id');
            $table->string('layout_item_id');
            $table->unsignedTinyInteger('row')->default(0);
            $table->text('text')->nullable();
            $table->string('font', 225)->default('Calibri');
            $table->string('color', 225)->default('Black');
            $table->string('animation_name', 25)->nullable();
            $table->boolean('animated')->default(false);
            $table->unsignedSmallInteger('font_size')->default(18);
            $table->unsignedSmallInteger('top')->default(1);
            $table->unsignedSmallInteger('left')->default(1);
            $table->unsignedSmallInteger('width')->default(150);
            $table->unsignedSmallInteger('height')->default(50);
            $table->unsignedSmallInteger('z_index')->default(0);
            $table->string('background_image')->nullable();
            $table->string('background_color',100)->default('none');
            $table->string('border_color',100)->default('black');
            $table->string('border_style',100)->default('solid');
            $table->unsignedTinyInteger('border_width')->default(1);
            $table->unsignedTinyInteger('border_radius')->default(0);
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
        Schema::dropIfExists('textfields');
    }
}
