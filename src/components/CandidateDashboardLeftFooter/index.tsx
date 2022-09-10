import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/selectors';
import candidateImage from '../../theme/images/ph-small.jpg';
import { useAppDispatch } from '../../store';
import { logOut } from '../../store/user/slice';

const CandidateDashboardLeftFooter: FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => setShowProfileDropdown(!showProfileDropdown);
  return (
    <nav className="pxp-dashboard-side-user-nav-container pxp-is-candidate">
      <div
        className="pxp-dashboard-side-user-nav"
        onClick={toggleProfileDropdown}
        onKeyDown={toggleProfileDropdown}
        role="button"
        tabIndex={0}
      >
        <div className="dropdown pxp-dashboard-side-user-nav-dropdown drop-up">
          <span role="button" className="dropdown-toggle" data-bs-toggle="dropdown">
            <div
              className="pxp-dashboard-side-user-nav-avatar pxp-cover"
              style={{ backgroundImage: `url(${candidateImage})` }}
            />
            <div className="pxp-dashboard-side-user-nav-name">{`${user?.firstName} ${user?.lastName}`}</div>
          </span>
          <ul className={`dropdown-menu drop-up ${showProfileDropdown ? 'show' : ''}`}>
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
              <button type="button" className="dropdown-item" onClick={() => dispatch(logOut())}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default CandidateDashboardLeftFooter;
