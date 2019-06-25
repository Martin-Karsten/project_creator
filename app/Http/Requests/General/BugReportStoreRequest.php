<?php

namespace App\Http\Requests\General;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class BugReportStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if (Auth::check()) 
            return true;
        else
            return false;
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
                'bug_subject' => 'required|max:100',
                'bug_cause' => 'required|max:300',
                'bug_explanation' => 'max:1000',
        ];
    }

    public function messages()
    {
        return [
            'bug_subject.required' => 'Subject is required!',
            'bug_cause.required' => 'Cause is required!',
            'bug_explanation.required' => 'Explanation can only be 1000 characters long'
        ];
    }
}
