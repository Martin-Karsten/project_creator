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
            $table->string('id')->primary();
            $table->string('project_id');
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
