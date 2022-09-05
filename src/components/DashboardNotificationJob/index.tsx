import React, { FC } from 'react';

const DashboardNotificationJob: FC = () => (
  <div className="pxp-dashboard-notifications-item mb-3">
    <div className="pxp-dashboard-notifications-item-left">
      <div className="pxp-dashboard-notifications-item-type">
        <span className="fa fa-briefcase" />
      </div>
      <div className="pxp-dashboard-notifications-item-message">
        <a href="single-candidate-1.html">Scott Goodwin</a>
        applied for
        <a href="single-job-1.html">Software Engineer</a>
      </div>
    </div>
    <div className="pxp-dashboard-notifications-item-right">20m ago</div>
  </div>
);

export default DashboardNotificationJob;
