<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWebImageAnimationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('web_image_animations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('web_image_id', 128);
            $table->string('animation_name', 30)->default('fadeIn');
            $table->double('animation_duration', 3,2)->default(0.5);
            $table->unsignedSmallInteger('animation_order')->default(0);
            $table->boolean('animated')->default(false);
            $table->timestamps();

            $table->foreign('web_image_id')
            ->references('id')
            ->on('web_images')
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
        Schema::dropIfExists('web_image_animations');
    }
}
