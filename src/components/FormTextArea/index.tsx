import React, { FC } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { TINY_MCE_KEY } from '../../config/constants';

interface IFormInput {
  label: string;
  value: string;
  placeholder: string;
  onChangeHandler: (e: string) => void;
}

const FormTextArea: FC<IFormInput> = ({ label, value, placeholder, onChangeHandler }: IFormInput) => (
  <div className="mb-3">
    <label htmlFor="pxp-company-job-description" className="form-label">
      {label}
    </label>
    <Editor
      apiKey={TINY_MCE_KEY}
      initialValue={placeholder}
      value={value}
      init={{
        plugins: [
          'autolink',
          'lists',
          'link',
          'image',
          'anchor',
          'code',
          'insertdatetime',
          'table',
          'wordcount',
        ],
      }}
      onEditorChange={(s) => onChangeHandler(s)}
    />
  </div>
);

export default FormTextArea;
