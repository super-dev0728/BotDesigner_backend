<?php

namespace App\Models;

use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    // use soft delete instead of permanent delete
    use SoftDeletes;
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'projects';

    protected $fillable = ['name','description','frequency','start_date','end_date','creation_date','last_extraction','end_date','nbot','datasets_created','records_extracteds','rest_id_input_dataset','rest_id_job'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['start_date', 'end_date'];

   
    protected static function newFactory(): ProjectFactory
    {
        return ProjectFactory::new();
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
    public static function loadAllMine(int $user_id): Paginator
    {
        return static::latest()
            ->mine($user_id)
            ->paginate();
    }

     /**
     * load all published with pagination
     *
     * @return Paginator
     */
    public static function loadAllRange(int $user_id,$startDate,$endDate): Paginator
    {
        return static::with([
            'project' => function (BelongsTo $query) {
                $query->select('id', 'name','description','frequency','start_date','end_date');
            },
        ])->latest()
        ->mine($user_id)
            ->dateStart($startDate)
            ->dateEnd($endDate)
            ->paginate();
    }


    /**
     * load one published
     *
     * @param string $slug
     *
     * @return Project
     */
    public static function loadRange(int $user_id,$startDate,$endDate): Project
    {
        return static::with([
            'project' => function (BelongsTo $query) {
                $query->select('id', 'name','description','frequency','start_date','end_date');
            },
        ])
        ->mine($user_id)
        ->dateStart($startDate)
        ->dateEnd($endDate)
        ->firstOrFail();
    }

 

    /**
     * Load only projects related with the user id
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
     * Load only projects related to the start date
     *
     * @param Builder $query
     * @param int $user_id
     *
     * @return Builder
     */
    public function scopeDateStart(Builder $query, $data_start): Builder
    {
        return $query->where('start_date', $data_start);
    }



     /**
     * Load only projects related to end date
     *
     * @param Builder $query
     * @param int $user_id
     *
     * @return Builder
     */
    public function scopeDateEnd(Builder $query, Datetime $date_end): Builder
    {
        return $query->where('end_date', $date_end);
    }

    /**
     * Relationship between projects and user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


   
}