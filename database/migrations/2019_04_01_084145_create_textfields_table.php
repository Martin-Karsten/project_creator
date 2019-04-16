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
            $table->bigIncrements('id');
            $table->string('name', 100)->default('default');
            $table->string('project_id');
            $table->unsignedTinyInteger('row')->default(1);
            $table->text('text')->nullable();
            $table->string('font', 225)->default('Calibri');
            $table->string('color', 225)->default('Black');
            $table->unsignedSmallInteger('font_size')->default(18);
            $table->unsignedSmallInteger('top')->default(0);
            $table->unsignedSmallInteger('left')->default(0);
            $table->unsignedSmallInteger('width')->default(150);
            $table->unsignedSmallInteger('height')->default(100);
            $table->unsignedSmallInteger('z_index')->default(0);
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
        Schema::dropIfExists('textfields');
    }
}
