<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDetailToEventsTable extends Migration
{
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }

    public function down()
    {
<<<<<<< HEAD:database/migrations/2024_09_20_215745_add_detail_to_events_table.php
        Schema::table('events', function (Blueprint $table) {
            $table->dropColumn('detail');
        });
=======
        Schema::dropIfExists('events');
>>>>>>> accbb83 (restart):database/migrations/2024_10_05_005915_create_events_table.php
    }
}
