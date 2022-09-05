import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { DASHBOARD_ADD_JOB_ROUTE } from '../../config/routes';
import logoImage from '../../theme/images/company-logo-1.png';

const DashboardNav: FC = () => (
  <nav className="pxp-user-nav pxp-on-light">
    <NavLink to={DASHBOARD_ADD_JOB_ROUTE} className="btn rounded-pill pxp-nav-btn">
      Post a Job
    </NavLink>
    <div className="dropdown pxp-user-nav-dropdown pxp-user-notifications">
      <span role="button" className="dropdown-toggle" data-bs-toggle="dropdown">
        <span className="fa fa-bell-o" />
        <div className="pxp-user-notifications-counter">5</div>
      </span>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <a className="dropdown-item" href="company-dashboard-notifications.html">
            <strong>Scott Goodwin</strong>
            applied for
            <strong>Software Engineer</strong>
            <span className="pxp-is-time">20m</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="company-dashboard-notifications.html">
            <strong>Alayna Becker</strong>
            sent you a message.
            <span className="pxp-is-time">1h</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="company-dashboard-notifications.html">
            <strong>Erika Tillman</strong>
            applied for
            <strong>Team Leader</strong>
            <span className="pxp-is-time">2h</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="company-dashboard-notifications.html">
            <strong>Scott Goodwin</strong>
            applied for
            <strong>Software Engineer</strong>
            <span className="pxp-is-time">5h</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="company-dashboard-notifications.html">
            <strong>Alayna Becker</strong>
            sent you a message.
            <span className="pxp-is-time">1d</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="company-dashboard-notifications.html">
            <strong>Erika Tillman</strong>
            applied for
            <strong>Software Engineer</strong>
            <span className="pxp-is-time">3d</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item pxp-link" href="company-dashboard-notifications.html">
            Read All
          </a>
        </li>
      </ul>
    </div>
    <div className="dropdown pxp-user-nav-dropdown">
      <span role="button" className="dropdown-toggle" data-bs-toggle="dropdown">
        <div className="pxp-user-nav-avatar pxp-cover" style={{ backgroundImage: `url(${logoImage})` }} />
        <div className="pxp-user-nav-name d-none d-md-block">Artistre Studio</div>
      </span>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <a className="dropdown-item" href="company-dashboard.html">
            Dashboard
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="company-dashboard-profile.html">
            Edit profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="index.html">
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default DashboardNav;
