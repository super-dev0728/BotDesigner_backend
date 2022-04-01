<?php
use Illuminate\Support\Facades\Route;
    Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/{projectId}/{scraper_id}', 'InitialConcurrentSearchController@store')->name('initialconcurrentsearch.store');
    Route::get('/{scraper_id}', 'InitialConcurrentSearchController@index')->name('initialconcurrentsearch.index');
    Route::get('/{id}', 'InitialConcurrentSearchController@show')->name('initialconcurrentsearch.show');
    Route::match(['put', 'patch'], '/{id}', 'InitialConcurrentSearchController@update')->name('initialconcurrentsearch.update');
    Route::delete('/{id}', 'InitialConcurrentSearchController@delete')->name('initialconcurrentsearch.delete');
});
