<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tables', function (Blueprint $table) {
            $table->increments('id');
            $table->string('project_id');
            $table->unsignedTinyInteger('rows')->default(2);
            $table->unsignedTinyInteger('columns')->default(3);
            $table->text('text');
            $table->timestamps();

            $table->foreign('project_id')
            ->references('id')
            ->on('projects')
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
        Schema::dropIfExists('tables');
    }
}
