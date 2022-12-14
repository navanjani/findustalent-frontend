import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  DASHBOARD_ADD_JOB_ROUTE,
  DASHBOARD_HOME_ROUTE,
  HOME_PAGE_ROUTE,
  PRICING_PAGE_ROUTE,
  SIGNIN_PAGE_ROUTE,
} from '../../config/routes';
import ClientNavbarMobile from '../ClientNavbarMobile';
import { selectUser } from '../../store/user/selectors';
import { useAppDispatch } from '../../store';
import { getUserWithStoredToken } from '../../store/user/thunks';
import BadgePillSuccess from '../BadgePillSuccess';
import { selectLightPage } from '../../store/appState/selectors';
import { logOut } from '../../store/user/slice';

const ClientNavbar: FC = () => {
  const dispatch = useAppDispatch();
  const [stickyClass, setStickyClass] = useState('');
  const user = useSelector(selectUser);
  const lightPage = useSelector(selectLightPage);

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

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

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
                <NavLink to={HOME_PAGE_ROUTE}>
                  Product <BadgePillSuccess label="pending" />
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to={PRICING_PAGE_ROUTE}>Pricing</NavLink>
              </li>
            </ul>
          </nav>

          <nav className={`pxp-user-nav d-none d-sm-flex ${lightPage ? 'pxp-on-light' : ''}`}>
            {user && (
              <NavLink to={DASHBOARD_ADD_JOB_ROUTE}>
                <button type="button" className="btn rounded-pill pxp-nav-btn">
                  Post a Job
                </button>
              </NavLink>
            )}

            {user ? (
              <NavLink
                className="btn rounded-pill pxp-user-nav-trigger pxp-on-light"
                data-bs-toggle="modal"
                to={DASHBOARD_HOME_ROUTE}
                role="button"
              >
                Dashbaord
              </NavLink>
            ) : (
              <NavLink
                className="btn rounded-pill pxp-user-nav-trigger pxp-on-light"
                data-bs-toggle="modal"
                to={SIGNIN_PAGE_ROUTE}
                role="button"
              >
                Sign in
              </NavLink>
            )}
            {user && (
              <button
                className="btn rounded-pill pxp-user-nav-trigger pxp-on-light"
                type="button"
                data-bs-toggle="modal"
                onClick={() => dispatch(logOut())}
              >
                Sign out
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ClientNavbar;
