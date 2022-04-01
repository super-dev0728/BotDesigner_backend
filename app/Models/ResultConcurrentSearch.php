<?php

namespace App\Models;

use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ResultConcurrentSearch extends Model
{
    // use soft delete instead of permanent delete
    use SoftDeletes;
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'scrapers_result_concurrent_search';

    protected $fillable = ['search_button_selector','search_type','keyword_field_selector','search_terms','min_value_field_selector','min_values_terms','max_value_field_selector','max_values_terms'];

   
    protected static function newFactory(): ResultConcurrentSearchFactory
    {
        return ResultConcurrentSearchFactory::new();
    }

    /**
     * Load all for admin and paginate
     *
     * @return Paginator
     */
    public static function loadAll(): Paginator
    {
        return static::latest()
            ->paginate();
    }


      /**
     * Load all for logged in user and paginate
     *
     * @param $user_id
     *
     * @return Paginator
     */
    public static function loadAllConcurrentSearch(int $scraper_id): Paginator
    {
        return static::latest()
            ->scraper($scraper_id)
            ->paginate();
    }


    /**
     * Load only InitialConcurrentSearch related with the scraper id
     *
     * @param Builder $query
     * @param int $user_id
     *  
     * @return Builder
     */
    public function scopeScraper(Builder $query, int $scraper_id): Builder
    {
        return $query->where('scraper_id', $scraper_id);
    }

    /**
     * Relationship between Scraper and category
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function scraper(): BelongsTo
    {
        return $this->belongsTo(Scraper::class);
    }
}