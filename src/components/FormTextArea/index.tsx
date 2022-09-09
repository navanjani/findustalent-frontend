import React, { ChangeEvent, FC } from 'react';

interface IFormInput {
  label: string;
  value: string;
  placeholder: string;
  onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea: FC<IFormInput> = ({ label, value, onChangeHandler, placeholder }: IFormInput) => (
  <div className="mb-3">
    <label htmlFor="pxp-company-job-description" className="form-label">
      {label}
    </label>
    <textarea
      onChange={onChangeHandler}
      className="form-control"
      id="pxp-company-job-description"
      placeholder={placeholder}
      value={value}
    />
  </div>
);

export default FormTextArea;
