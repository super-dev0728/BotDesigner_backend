<?php
namespace Database\Factories;
use App\Models\User;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition()
    {
        $title = $this->faker->sentence;

        return [
            'category_id' => Category::factory(),
            'category' => $title,
            'description' => $this->faker->sentence(15),
        ];
    }
}