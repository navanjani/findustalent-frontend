import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_PAGE_ROUTE } from '../../config/routes';

const DashboardAppLogo: FC = () => (
  <div className="pxp-logo">
    <NavLink to={HOME_PAGE_ROUTE} className="pxp-animate">
      <span style={{ color: 'var(--pxpMainColor)' }}>findus</span>
      talent
    </NavLink>
  </div>
);

export default DashboardAppLogo;
