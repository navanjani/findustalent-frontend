import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  DASHBOARD_ADD_JOB_ROUTE,
  DASHBOARD_HOME_ROUTE,
  DASHBOARD_MANAGE_JOBS_ROUTE,
  DASHBOARD_RECRUITER_CANDIDATE_ROUTE,
  DASHBOARD_RECRUITER_EDIT_PROFILE_ROUTE,
  DASHBOARD_RECRUITER_SUBSCRIPTIONS_ROUTE,
} from '../../config/routes';
import BadgePillSuccess from '../BadgePillSuccess';

const DashboardLeftNav: FC = () => (
  <nav className="mt-3 mt-lg-4 d-flex justify-content-between flex-column pb-100">
    <div className="pxp-dashboard-side-label">Admin tools</div>
    <ul className="list-unstyled">
      <li>
        <NavLink to={DASHBOARD_HOME_ROUTE} className={({ isActive }) => (isActive ? 'pxp-active' : '')}>
          <span className="fa fa-home" />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to={DASHBOARD_RECRUITER_EDIT_PROFILE_ROUTE}
          className={({ isActive }) => (isActive ? 'pxp-active' : '')}
        >
          <span className="fa fa-pencil" />
          Edit Profile <BadgePillSuccess label="pending" />
        </NavLink>
      </li>
      <li>
        <NavLink to={DASHBOARD_ADD_JOB_ROUTE} className={({ isActive }) => (isActive ? 'pxp-active' : '')}>
          <span className="fa fa-file-text-o" />
          Publish New Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to={DASHBOARD_MANAGE_JOBS_ROUTE}
          className={({ isActive }) => (isActive ? 'pxp-active' : '')}
        >
          <span className="fa fa-briefcase" />
          Manage Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to={DASHBOARD_RECRUITER_CANDIDATE_ROUTE}
          className={({ isActive }) => (isActive ? 'pxp-active' : '')}
        >
          <span className="fa fa-user-circle-o" />
          Candidates
        </NavLink>
      </li>
      <li>
        <NavLink
          to={DASHBOARD_RECRUITER_SUBSCRIPTIONS_ROUTE}
          className={({ isActive }) => (isActive ? 'pxp-active' : '')}
        >
          <span className="fa fa-credit-card" />
          Subscriptions
        </NavLink>
      </li>
      {/*<li>*/}
      {/*  <NavLink*/}
      {/*    to={DASHBOARD_RECRUITER_CHANGE_PASSWORD_ROUTE}*/}
      {/*    className={({ isActive }) => (isActive ? 'pxp-active' : '')}*/}
      {/*  >*/}
      {/*    <span className="fa fa-lock" />*/}
      {/*    Change Password*/}
      {/*  </NavLink>*/}
      {/*</li>*/}
    </ul>
    <div className="pxp-dashboard-side-label mt-3 mt-lg-4">Insights</div>
    <ul className="list-unstyled">
      <li>
        <a href="company-dashboard-inbox.html" className="d-flex justify-content-between align-items-center">
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

export default DashboardLeftNav;
