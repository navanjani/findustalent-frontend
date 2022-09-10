import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/selectors';
import candidateImage from '../../theme/images/ph-small.jpg';

const CandidateDashboardLeftFooter: FC = () => {
  const user = useSelector(selectUser);
  return (
    <nav className="pxp-dashboard-side-user-nav-container pxp-is-candidate">
      <div className="pxp-dashboard-side-user-nav">
        <div className="dropdown pxp-dashboard-side-user-nav-dropdown dropup">
          <span role="button" className="dropdown-toggle" data-bs-toggle="dropdown">
            <div
              className="pxp-dashboard-side-user-nav-avatar pxp-cover"
              style={{ backgroundImage: `url(${candidateImage})` }}
            />
            <div className="pxp-dashboard-side-user-nav-name">{`${user?.firstName} ${user?.lastName}`}</div>
          </span>
          <ul className="dropdown-menu">
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
      </div>
    </nav>
  );
};
export default CandidateDashboardLeftFooter;
