import React, { ChangeEvent, FC } from 'react';

interface IFormInputWithLabel {
  type: string;
  label: string;
  value?: string;
  placeholder: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInputWithLabel: FC<IFormInputWithLabel> = ({
  type,
  label,
  value,
  onChangeHandler,
  placeholder,
}: IFormInputWithLabel) => (
  <>
    <label htmlFor="pxp-company-job-title" className="form-label">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      id="pxp-company-job-title"
      className="form-control"
    />
  </>
);
FormInputWithLabel.defaultProps = {
  value: '',
};
export default FormInputWithLabel;
