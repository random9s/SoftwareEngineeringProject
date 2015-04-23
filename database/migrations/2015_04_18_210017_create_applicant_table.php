<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApplicantTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('applicant', function(Blueprint $table)
		{
			$table->string('sso', 20)->unique();
			$table->string('name', 40);
			$table->string('phone', 10);
			$table->string('email', 40);
			$table->string('gpa', 4);
			$table->string('graddate', 20);
			$table->string('program', 20);
			$table->string('previouswork', 140)->nullable();
			$table->enum('previousteach', array(40))->nullable();
			$table->enum('currentteach', array(4))->nullable();
			$table->enum('futureteach', array(4))->nullable();
			$table->integer('speakscore')->nullable();
			$table->string('speakdate')->nullable();
			$table->string('passwordtemp');
			//$table->increments('id');
			//$table->timestamps();
			//$table->primary('sso');

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('applicant');
	}

}
