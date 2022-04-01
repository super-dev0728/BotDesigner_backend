<?php
use Illuminate\Support\Facades\Route;
    Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/{projectId}/{scraper_id}', 'ResultConcurrentSearchController@store')->name('resultconcurrentsearch.store');
    Route::get('/{scraper_id}', 'ResultConcurrentSearchController@index')->name('resultconcurrentsearch.index');
    Route::get('/{id}', 'ResultConcurrentSearchController@show')->name('resultconcurrentsearch.show');
    Route::match(['put', 'patch'], '/{id}', 'ResultConcurrentSearchController@update')->name('resultconcurrentsearch.update');
    Route::delete('/{id}', 'ResultConcurrentSearchController@delete')->name('resultconcurrentsearch.delete');
});
