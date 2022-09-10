import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DASHBOARD_ADD_JOB_ROUTE } from '../../config/routes';
import logoImage from '../../theme/images/company-logo-1.png';
import { selectUser } from '../../store/user/selectors';
import { useAppDispatch } from '../../store';
import { logOut } from '../../store/user/slice';

const DashboardNav: FC = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => setShowProfileDropdown(!showProfileDropdown);

  return (
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
      <div
        className="dropdown pxp-user-nav-dropdown"
        onClick={toggleProfileDropdown}
        onKeyDown={toggleProfileDropdown}
        role="button"
        tabIndex={0}
      >
        <span className="dropdown-toggle">
          <div className="pxp-user-nav-avatar pxp-cover" style={{ backgroundImage: `url(${logoImage})` }} />
          <div className="pxp-user-nav-name d-none d-md-block">{`${user?.firstName} ${user?.lastName} `}</div>
        </span>
        <ul className={`dropdown-menu dropdown-menu-end ${showProfileDropdown ? 'show' : ''}`}>
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
            <button type="button" className="dropdown-item" onClick={() => dispatch(logOut())}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNav;
