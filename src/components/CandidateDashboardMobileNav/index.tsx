import React, { FC } from 'react';

const CandidateDashboardMobileNav: FC = () => (
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
      className="offcanvas offcanvas-start pxp-nav-mobile-container pxp-is-dashboard pxp-is-candidate"
      tabIndex={-1}
      id="pxpMobileNav"
    />
    <div className="offcanvas-header">
      <div className="pxp-logo">
        <a href="index.html" className="pxp-animate">
          <span style={{ color: 'var(--pxpMainColor)' }}>findus</span>talent
        </a>
      </div>
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <nav className="pxp-nav-mobile">
        <ul className="navbar-nav justify-content-end flex-grow-1">
          <li className="pxp-dropdown-header">Admin tools</li>
          <li className="nav-item">
            <a href="candidate-dashboard.html">
              <span className="fa fa-home" />
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="candidate-dashboard-profile.html">
              <span className="fa fa-pencil" />
              Edit Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="candidate-dashboard-applications.html">
              <span className="fa fa-file-text-o" />
              Apllications
            </a>
          </li>
          <li className="nav-item">
            <a href="candidate-dashboard-fav-jobs.html">
              <span className="fa fa-heart-o" />
              Favourite Jobs
            </a>
          </li>
          <li className="nav-item">
            <a href="candidate-dashboard-password.html">
              <span className="fa fa-lock" />
              Change Password
            </a>
          </li>
          <li className="pxp-dropdown-header mt-4">Insights</li>
          <li className="nav-item">
            <a
              href="candidate-dashboard-inbox.html"
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
              href="candidate-dashboard-notifications.html"
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
);
export default CandidateDashboardMobileNav;
