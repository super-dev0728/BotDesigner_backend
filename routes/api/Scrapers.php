<?php
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/{projectId}', 'ScraperController@store')->name('scrapers.store');
    Route::get('/{projectId}', 'ScraperController@index')->name('scrapers.index');
    Route::get('/{projectId}/{id}', 'ScraperController@show')->name('scrapers.show');
    Route::match(['put', 'patch'], '/{id}', 'ScraperController@update')->name('scrapers.update');
    Route::delete('/{id}', 'ScraperController@delete')->name('scrapers.delete');
});
