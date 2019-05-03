<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWebVideoAnimationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('web_video_animations', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('web_video_id');
            $table->string('animation_name', 30)->default('fadeIn');
            $table->double('animation_duration', 3,2)->default(0.5);
            $table->unsignedSmallInteger('animation_order')->default(0);
            $table->boolean('animated')->default(false);
            $table->timestamps();

            $table->foreign('web_video_id')
            ->references('id')
            ->on('web_videos')
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
        Schema::dropIfExists('web_video_animations');
    }
}
