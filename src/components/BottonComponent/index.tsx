import React, { FC } from 'react';

interface IButtonComponent {
  label: string;
}

const ButtonComponent: FC<IButtonComponent> = ({ label }: IButtonComponent) => (
  <button className="btn rounded-pill pxp-sign-hero-form-cta btn-full-width" type="submit">
    {label}
  </button>
);
export default ButtonComponent;
