<?php
use Illuminate\Support\Facades\Route;
    Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/{projectId}/{scraper_id}', 'SubSearchController@store')->name('subsearch.store');
    Route::get('/{scraper_id}', 'SubSearchController@index')->name('subsearch.index');
    Route::get('/{id}', 'SubSearchController@show')->name('subsearch.show');
    Route::match(['put', 'patch'], '/{id}', 'SubSearchController@update')->name('subsearch.update');
    Route::delete('/{id}', 'SubSearchController@delete')->name('subsearch.delete');
});