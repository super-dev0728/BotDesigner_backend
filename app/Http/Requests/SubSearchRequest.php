<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SubSearchRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'search_button_selector' => 'required',
            'search_type' => 'required',
            'keyword_field_selector' => 'required',
            'search_terms' => 'required',
            'min_value_field_selector' => 'nullable',
            'min_values_terms' => 'nullable',
            'max_value_field_selector' => 'nullable',
            'max_values_terms' => 'nullable'
        ];
    }
}
