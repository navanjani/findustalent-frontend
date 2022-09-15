import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoImage from '../../theme/images/company-logo-1.png';
import { selectUserCompany } from '../../store/company/selectors';

const DashboardLeftFooter: FC = () => {
  const userCompany = useSelector(selectUserCompany);
  return (
    <nav className="pxp-dashboard-side-user-nav-container">
      <div className="pxp-dashboard-side-user-nav">
        <div className="dropdown pxp-dashboard-side-user-nav-dropdown dropup">
          <span role="button" className="dropdown-toggle" data-bs-toggle="dropdown">
            <div
              className="pxp-dashboard-side-user-nav-avatar pxp-cover"
              style={{ backgroundImage: `url(${logoImage})` }}
            />

            <Link to={`/c/${userCompany?.slug}`}>
              <div className="pxp-dashboard-side-user-nav-name">{userCompany?.name}</div>
            </Link>
          </span>
          <ul className="dropdown-menu">
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
      </div>
    </nav>
  );
};

export default DashboardLeftFooter;
