<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('charts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('layout_item_id');
            $table->string('animation_name', 25)->nullable();
            $table->boolean('animated')->default(false);
            $table->unsignedTinyInteger('row')->default(0);
            $table->unsignedSmallInteger('top')->default(1);
            $table->unsignedSmallInteger('left')->default(1);
            $table->unsignedSmallInteger('width')->default(150);
            $table->unsignedSmallInteger('height')->default(100);
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
        Schema::dropIfExists('charts');
    }
}
