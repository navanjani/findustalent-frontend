import React, { ChangeEvent, FC } from 'react';
import slugify from 'slugify';

interface IFormInput {
  type: string;
  label: string;
  value?: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  icon: string;
}

const FormInput: FC<IFormInput> = ({ type, label, value, onChangeHandler, icon }: IFormInput) => {
  const divId = `input-${slugify(label, { lower: true })}`;
  return (
    <div className="form-floating mb-3">
      <input type={type} className="form-control" id={divId} onChange={onChangeHandler} value={value} />
      <label htmlFor={divId}>{label}</label>
      {icon && <span className={`fa ${icon}`} />}
    </div>
  );
};
FormInput.defaultProps = {
  value: '',
};
export default FormInput;
