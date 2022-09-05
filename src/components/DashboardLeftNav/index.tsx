import React, { FC } from 'react';

const DashboardLeftNav: FC = () => (
  <nav className="mt-3 mt-lg-4 d-flex justify-content-between flex-column pb-100">
    <div className="pxp-dashboard-side-label">Admin tools</div>
    <ul className="list-unstyled">
      <li className="pxp-active">
        <a href="company-dashboard.html">
          <span className="fa fa-home" />
          Dashboard
        </a>
      </li>
      <li>
        <a href="company-dashboard-profile.html">
          <span className="fa fa-pencil" />
          Edit Profile
        </a>
      </li>
      <li>
        <a href="company-dashboard-new-job.html">
          <span className="fa fa-file-text-o" />
          New Job Offer
        </a>
      </li>
      <li>
        <a href="company-dashboard-jobs.html">
          <span className="fa fa-briefcase" />
          Manage Jobs
        </a>
      </li>
      <li>
        <a href="company-dashboard-candidates.html">
          <span className="fa fa-user-circle-o" />
          Candidates
        </a>
      </li>
      <li>
        <a href="company-dashboard-subscriptions.html">
          <span className="fa fa-credit-card" />
          Subscriptions
        </a>
      </li>
      <li>
        <a href="company-dashboard-password.html">
          <span className="fa fa-lock" />
          Change Password
        </a>
      </li>
    </ul>
    <div className="pxp-dashboard-side-label mt-3 mt-lg-4">Insights</div>
    <ul className="list-unstyled">
      <li>
        <a href="company-dashboard-inbox.html" className="d-flex justify-content-between align-items-center">
          <div>
            <span className="fa fa-envelope-o" />
            Inbox
          </div>
          <span className="badge rounded-pill">14</span>
        </a>
      </li>
      <li>
        <a
          href="company-dashboard-notifications.html"
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <span className="fa fa-bell-o" />
            Notifications
          </div>
          <span className="badge rounded-pill">5</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default DashboardLeftNav;
