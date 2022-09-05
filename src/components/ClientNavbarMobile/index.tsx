import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_PAGE_ROUTE } from '../../config/routes';

const ClientNavbarMobile: FC = () => (
  <div className="pxp-nav-trigger navbar d-xl-none flex-fill">
    <NavLink
      to={HOME_PAGE_ROUTE}
      role="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#pxpMobileNav"
      aria-controls="pxpMobileNav"
    >
      <div className="pxp-line-1" />
      <div className="pxp-line-2" />
      <div className="pxp-line-3" />
    </NavLink>
    <div
      className="offcanvas offcanvas-start pxp-nav-mobile-container"
      tabIndex={-1}
      id="pxpMobileNav"
    >
      <div className="offcanvas-header">
        <div className="pxp-logo">
          <a href="index.html" className="pxp-animate">
            <span>j</span>
            obster
          </a>
        </div>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <nav className="pxp-nav-mobile">
          <ul className="navbar-nav justify-content-end flex-grow-1">
            <li className="nav-item dropdown">
              <NavLink
                to={HOME_PAGE_ROUTE}
                role="button"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default ClientNavbarMobile;
