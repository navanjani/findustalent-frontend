import React, { FC } from 'react';
import StatJobPosted from '../../components/StatJobPosted';
import StatApplications from '../../components/StatApplications';

const RecruiterDashboardPage: FC = () => (
  <>
    <div className="pxp-dashboard-side-panel d-none d-lg-block" />
    <div className="pxp-dashboard-content">
      <div className="pxp-dashboard-content-details">
        <div>
          <h1>Dashboard</h1>
          <p className="pxp-text-light">Welcome to Jobster!</p>
        </div>
        <div className="row mt-4 mt-lg-5 align-items-center">
          <div className="col-sm-6 col-xxl-3">
            <StatJobPosted />
          </div>
          <div className="col-sm-6 col-xxl-3">
            <StatApplications />
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
              <div className="pxp-dashboard-stats-card-icon text-warning">
                <span className="fa fa-envelope-o" />
              </div>
              <div className="pxp-dashboard-stats-card-info">
                <div className="pxp-dashboard-stats-card-info-number">14</div>
                <div className="pxp-dashboard-stats-card-info-text pxp-text-light">
                  Unread messages
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
              <div className="pxp-dashboard-stats-card-icon text-danger">
                <span className="fa fa-bell-o" />
              </div>
              <div className="pxp-dashboard-stats-card-info">
                <div className="pxp-dashboard-stats-card-info-number">5</div>
                <div className="pxp-dashboard-stats-card-info-text pxp-text-light">
                  Notifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default RecruiterDashboardPage;
