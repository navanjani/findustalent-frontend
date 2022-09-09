import React, { ChangeEvent, FC } from 'react';

interface IOption {
  label: string;
  value: string | number;
}

interface IFormSelect {
  label: string;
  value: string;
  options: IOption[];
  onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}
const FormSelect: FC<IFormSelect> = ({ label, value, options, onChangeHandler }: IFormSelect) => (
  <div className="mb-3">
    <label htmlFor="pxp-company-job-category" className="form-label">
      {label}
    </label>
    <select value={value} onChange={onChangeHandler} id="pxp-company-job-category" className="form-select">
      <option> </option>
      {options.map((option, index) => (
        /* eslint react/no-array-index-key: 0 */
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default FormSelect;
