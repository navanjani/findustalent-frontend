import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/selectors';
import candidateImage from '../../theme/images/ph-small.jpg';

const CandidateDashboardNav: FC = () => {
  const user = useSelector(selectUser);
  return (
    <nav className="pxp-user-nav pxp-on-light">
      <div className="dropdown pxp-user-nav-dropdown pxp-user-notifications">
        <span role="button" className="dropdown-toggle" data-bs-toggle="dropdown">
          <span className="fa fa-bell-o" />
          <div className="pxp-user-notifications-counter">5</div>
        </span>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="candidate-dashboard-notifications.html">
              <strong>
                (`${user?.firstName} ${user?.lastName}`)
              </strong>{' '}
              viewed your profile. <span className="pxp-is-time">20m</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="candidate-dashboard-notifications.html">
              <strong>CoderBotics</strong> sent you a message. <span className="pxp-is-time">1h</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="candidate-dashboard-notifications.html">
              <strong>Illuminate Studio</strong> viewed your profile. <span className="pxp-is-time">2h</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="candidate-dashboard-notifications.html">
              <strong>Syspresoft</strong> sent you a message. <span className="pxp-is-time">5h</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="candidate-dashboard-notifications.html">
              <strong>Artistre Studio</strong> viewed your profile. <span className="pxp-is-time">1d</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="candidate-dashboard-notifications.html">
              <strong>Illuminate Studio</strong> viewed your profile. <span className="pxp-is-time">3d</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item pxp-link" href="candidate-dashboard-notifications.html">
              Read All
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown pxp-user-nav-dropdown">
        <span role="button" className="dropdown-toggle" data-bs-toggle="dropdown">
          <div
            className="pxp-user-nav-avatar pxp-cover"
            style={{ backgroundImage: `url(${candidateImage})` }}
          />
          <div className="pxp-user-nav-name d-none d-md-block">{`${user?.firstName} ${user?.lastName}`}</div>
        </span>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="candidate-dashboard.html">
              Dashboard
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="candidate-dashboard-profile.html">
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
};
export default CandidateDashboardNav;
