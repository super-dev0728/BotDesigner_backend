<?php

namespace App\Models;

use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Scraper extends Model
{
    // use soft delete instead of permanent delete
    use SoftDeletes;
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'Scrapers';

    protected $fillable = ['name','startUrl','is_single_post','initial_search_button_selector','initial_search_type','initial_keyword_field_selector','initial_search_terms','initial_min_value_field_selector','initial_min_values_terms','initial_max_value_field_selector','initial_max_values_terms','result_search_button_selector','result_search_type','result_keyword_field_selector','result_search_terms','result_min_value_field_selector','result_min_values_terms','result_max_value_field_selector','result_max_values_terms','generated_code','next_page_selector','record_selector','link_details_page_selector','is_infinite_scroll','is_details_page','rest_id_bot'];

   
    protected static function newFactory(): ScraperFactory
    {
        return ScraperFactory::new();
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
    public static function loadAllProject(int $project_id): Paginator
    {
        return static::latest()
            ->project($project_id)
            ->paginate();
    }


    /**
     * Load all for logged in user and paginate
     *
     * @param $user_id
     *
     * @return Paginator
     */
    public static function loadAllProjectCategory(int $project_id,int $category_id): Paginator
    {
        return static::latest()
            ->project($project_id)
            ->category($category_id)
            ->paginate();
    }

    /**
     * Load all for logged in user and paginate
     *
     * @param $user_id
     *
     * @return Paginator
     */
    public static function loadAllMineProjectCategory(int $user_id,int $project_id,int $category_id): Paginator
    {
        return static::latest()
            ->mine($user_id)
            ->project($project_id)
            ->category($category_id)
            ->paginate();
    }


     /**
     * Load only scrapers related with the project id
     *
     * @param Builder $query
     * @param int $project_id
     *  
     * @return Builder
     */
    public function scopeProject(Builder $query, int $project_id): Builder
    {
        return $query->where('project_id', $project_id);
    }


     /**
     * Load only scrapers related with the user id
     *
     * @param Builder $query
     * @param int $category_id
     *  
     * @return Builder
     */
    public function scopeCategory(Builder $query, int $category_id): Builder
    {
        return $query->where('category_id', $category_id);
    }

    /**
     * Load only scrapers related with the user id
     *
     * @param Builder $query
     * @param int $user_id
     *  
     * @return Builder
     */
    public function scopeMine(Builder $query, int $user_id): Builder
    {
        return $query->where('user_id', $user_id);
    }

    /**
     * Relationship between Scraper and user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relationship between Scraper and category
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

      /**
     * Relationship between Scraper and project
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    /**
    * @return HasMany
    */
    public function initialsubsearchs(): HasMany
    {
        return $this->hasMany(InitialSubSearch::class);
    }

    /**
    * @return HasMany
    */
    public function initialconcurrentsearch(): HasMany
    {
        return $this->hasMany(InitialConcurrentSearch::class);
    }

    /**
    * @return HasMany
    */
    public function resultconcurrentsearch(): HasMany
    {
        return $this->hasMany(ResultConcurrentSearch::class);
    }


    /**
    * @return HasMany
    */
    public function items(): HasMany
    {
        return $this->hasMany(RecordElement::class);
    }

    /**
    * @return HasMany
    */
    public function outputs(): HasMany
    {
        return $this->hasMany(Dataset::class);
    }
}