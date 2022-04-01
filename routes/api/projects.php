<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/', 'ProjectController@store')->name('projects.store');
    Route::get('/', 'ProjectController@index')->name('projects.index');
    Route::get('/{id}', 'ProjectController@show')->name('projects.show');
    Route::match(['put', 'patch'], '/{id}', 'ProjectController@update')->name('projects.update');
    Route::delete('/{id}', 'ProjectController@delete')->name('projects.delete');
});
