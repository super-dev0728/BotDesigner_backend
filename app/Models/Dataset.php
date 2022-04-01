<?php

namespace App\Models;

use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Dataset extends Model
{
    // use soft delete instead of permanent delete
    use SoftDeletes;
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'datasets';

    protected $fillable = ['extraction_date','number_records','processing_time','website','processed_urls','failed_urls','rest_id_output_dataset'];


    protected static function newFactory(): DatasetFactory
    {
        return DatasetFactory::new();
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
    public static function loadAllMine(int $scraper_id): Paginator
    {
        return static::latest()
            ->scraper($scraper_id)
            ->paginate();
    }


    /**
     * Load only datasets related with the scraper id
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
     * Relationship between categories and user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function scraper(): BelongsTo
    {
        return $this->belongsTo(Scraper::class);
    }
}