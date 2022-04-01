<?php

namespace App\Models;

use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RecordElement extends Model
{
    // use soft delete instead of permanent delete
    use SoftDeletes;
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'scraper_record_element_selector';

    protected $fillable = ['type','custom_name','element_selector'];

   
    protected static function newFactory(): RecordElementFactory
    {
        return RecordElement-Factory::new();
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
     * @param $scraper_id
     *
     * @return Paginator
     */
    public static function loadAllRecordElements(int $scraper_id): Paginator
    {
        return static::latest()
            ->scraper($scraper_id)
            ->paginate();
    }


    /**
     * Load only ConcurrentSearch related with the scraper id
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