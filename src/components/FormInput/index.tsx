import React, { ChangeEvent, FC } from 'react';

interface IFormInput {
  type: string;
  label: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  icon: string;
}

const FormInput: FC<IFormInput> = ({ type, label, onChangeHandler, icon }: IFormInput) => (
  <div className="form-floating mb-3">
    <input type={type} className="form-control" id="pxp-signup-page-email" onChange={onChangeHandler} />
    <label htmlFor="pxp-signup-page-email">{label}</label>
    {icon && <span className={`fa ${icon}`} />}
  </div>
);
export default FormInput;
