<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChartSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chart_settings', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('chart_id');
            $table->json('chart_settings');
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
        Schema::dropIfExists('chart_settings');
    }
}
