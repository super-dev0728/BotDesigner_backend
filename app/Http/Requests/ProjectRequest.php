<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
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
            'name' => 'required|min:3',
            'description' => 'required|min:10',
            'frequency' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'creation_date' => 'required|date',
            'last_extraction' => 'nullable|date',
            'nbot' => 'nullable|int',
            'datasets_created' => 'nullable|int',
            'records_extracteds' => 'nullable|int',
            'rest_id_input_dataset' => 'nullable',
            'rest_id_job' => 'nullable'
        ];
    }
}
