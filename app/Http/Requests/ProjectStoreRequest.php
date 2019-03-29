<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectStoreRequest extends FormRequest
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
            //TODO: make string longer than 225?
                'projectName' => 'required|max:255',
                'userId' => 'required',
                'private' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'project_name.required' => 'Name is required!',
            'user_id.required' => 'User ID is required!',
            'private.required' => 'Private is required!'
        ];
    }
}
