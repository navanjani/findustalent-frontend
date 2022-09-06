import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_PAGE_ROUTE } from '../../config/routes';
import ClientNavbarMobile from '../ClientNavbarMobile';

const ClientNavbar: FC = () => {
  const [stickyClass, setStickyClass] = useState('');

  // https://stackoverflow.com/a/69723476
  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      if (windowHeight > 80) {
        setStickyClass('pxp-is-sticky');
      } else {
        setStickyClass('');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  return (
    <header className={`pxp-header fixed-top ${stickyClass}`}>
      <div className="pxp-container">
        <div className="pxp-header-container">
          <div className="pxp-logo">
            <NavLink to={HOME_PAGE_ROUTE} className="pxp-animate">
              <span style={{ color: 'var(--pxpMainColor)' }}>findus</span>
              talent
            </NavLink>
          </div>
          <ClientNavbarMobile />
          <nav className="pxp-nav dropdown-hover-all d-none d-xl-block">
            <ul>
              <li className="dropdown">
                <NavLink to={HOME_PAGE_ROUTE}>Home</NavLink>
              </li>
              <li className="dropdown">
                <NavLink to={HOME_PAGE_ROUTE}>Product</NavLink>
              </li>
              <li className="dropdown">
                <NavLink to={HOME_PAGE_ROUTE}>Pricing</NavLink>
              </li>
            </ul>
          </nav>
          <nav className="pxp-user-nav pxp-on-light d-none d-sm-flex">
            <NavLink to={HOME_PAGE_ROUTE}>
              <button type="button" className="btn rounded-pill pxp-nav-btn">
                Post a Job
              </button>
            </NavLink>
            <NavLink
              className="btn rounded-pill pxp-user-nav-trigger pxp-on-light"
              data-bs-toggle="modal"
              to={HOME_PAGE_ROUTE}
              role="button"
            >
              Sign in
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ClientNavbar;
