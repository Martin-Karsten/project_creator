<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChartAnimationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chart_animations', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('chart_id');
            $table->string('animation_name', 30)->default('fadeIn');
            $table->double('animation_duration', 3,2)->default(0.5);
            $table->unsignedSmallInteger('animation_order')->default(0);
            $table->boolean('animated')->default(false);
            $table->timestamps();

            $table->foreign('chart_id')
            ->references('id')
            ->on('charts')
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
        Schema::dropIfExists('chart_animations');
    }
}
