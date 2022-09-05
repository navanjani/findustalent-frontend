import React, { FC } from 'react';

const DashboardMobileNav: FC = () => (
  <div className="pxp-nav-trigger navbar pxp-is-dashboard d-lg-none">
    <span
      role="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#pxpMobileNav"
      aria-controls="pxpMobileNav"
    >
      <div className="pxp-line-1" />
      <div className="pxp-line-2" />
      <div className="pxp-line-3" />
    </span>
    <div
      className="offcanvas offcanvas-start pxp-nav-mobile-container pxp-is-dashboard"
      tabIndex={-1}
      id="pxpMobileNav"
    >
      <div className="offcanvas-header">
        <div className="pxp-logo">
          <a href="index.html" className="pxp-animate">
            <span style={{ color: 'var(--pxpMainColor)' }}>j</span>
            obster
          </a>
        </div>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <nav className="pxp-nav-mobile">
          <ul className="navbar-nav justify-content-end flex-grow-1">
            <li className="pxp-dropdown-header">Admin tools</li>
            <li className="nav-item">
              <a href="company-dashboard.html">
                <span className="fa fa-home" />
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a href="company-dashboard-profile.html">
                <span className="fa fa-pencil" />
                Edit Profile
              </a>
            </li>
            <li className="nav-item">
              <a href="company-dashboard-new-job.html">
                <span className="fa fa-file-text-o" />
                New Job Offer
              </a>
            </li>
            <li className="nav-item">
              <a href="company-dashboard-jobs.html">
                <span className="fa fa-briefcase" />
                Manage Jobs
              </a>
            </li>
            <li className="nav-item">
              <a href="company-dashboard-candidates.html">
                <span className="fa fa-user-circle-o" />
                Candidates
              </a>
            </li>
            <li className="nav-item">
              <a href="company-dashboard-subscriptions.html">
                <span className="fa fa-credit-card" />
                Subscriptions
              </a>
            </li>
            <li className="nav-item">
              <a href="company-dashboard-password.html">
                <span className="fa fa-lock" />
                Change Password
              </a>
            </li>
            <li className="pxp-dropdown-header mt-4">Insights</li>
            <li className="nav-item">
              <a
                href="company-dashboard-inbox.html"
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  <span className="fa fa-envelope-o" />
                  Inbox
                </div>
                <span className="badge rounded-pill">14</span>
              </a>
            </li>
            <li className="nav-item">
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
      </div>
    </div>
  </div>
);

export default DashboardMobileNav;
