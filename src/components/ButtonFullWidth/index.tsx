import React, { FC } from 'react';

interface IButtonFullWidth {
  label: string;
}

const ButtonFullWidth: FC<IButtonFullWidth> = ({ label }: IButtonFullWidth) => (
  <button className="btn rounded-pill pxp-sign-hero-form-cta btn-full-width" type="submit">
    {label}
  </button>
);

export default ButtonFullWidth;
