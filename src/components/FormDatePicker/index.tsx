import React, { ChangeEvent, FC } from 'react';

interface IFormDatePicker {
  label: string;
  value: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormDatePicker: FC<IFormDatePicker> = ({ label, value, onChangeHandler }: IFormDatePicker) => (
  <div className="row date-container">
    <label htmlFor="dob" className="form-label">
      {label}
    </label>

    <input type="date" className="form-control" value={value} onChange={onChangeHandler} />
  </div>
);

export default FormDatePicker;
