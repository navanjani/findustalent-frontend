import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  DASHBOARD_CANDIDATE_APPLICATIONS_ROUTE,
  DASHBOARD_CANDIDATE_EDIT_PROFILE_ROUTE,
  DASHBOARD_HOME_ROUTE,
} from '../../config/routes';
import BadgePillSuccess from '../BadgePillSuccess';

const CandidateDashboardLeftNav: FC = () => (
  <nav className="mt-3 mt-lg-4 d-flex justify-content-between flex-column pb-100">
    <div className="pxp-dashboard-side-label">Admin tools</div>
    <ul className="list-unstyled">
      <li className="pxp-active">
        <NavLink to={DASHBOARD_HOME_ROUTE} className={({ isActive }) => (isActive ? 'pxp-active' : '')}>
          <span className="fa fa-home" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to={DASHBOARD_CANDIDATE_EDIT_PROFILE_ROUTE}
          className={({ isActive }) => (isActive ? 'pxp-active' : '')}
        >
          <span className="fa fa-pencil" />
          Edit Profile <BadgePillSuccess label="pending" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={DASHBOARD_CANDIDATE_APPLICATIONS_ROUTE}
          className={({ isActive }) => (isActive ? 'pxp-active' : '')}
        >
          <span className="fa fa-file-text-o" />
          Applications
        </NavLink>
      </li>
    </ul>
    <div className="pxp-dashboard-side-label mt-3 mt-lg-4">Insights</div>
    <ul className="list-unstyled">
      <li>
        <a
          href="candidate-dashboard-inbox.html"
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <span className="fa fa-envelope-o" />
            Inbox <BadgePillSuccess label="pending" />
          </div>
          <span className="badge rounded-pill">0</span>
        </a>
      </li>
    </ul>
  </nav>
);
export default CandidateDashboardLeftNav;
