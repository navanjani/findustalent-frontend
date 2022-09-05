import React, { FC } from 'react';
import DashboardNotificationJob from '../DashboardNotificationJob';

const DashboardNotificationList: FC = () => (
  <div className="row mt-4 mt-lg-5">
    <div className="col-xxl-6">
      <h2>Recent Notifications</h2>
      <div className="pxp-dashboard-notifications">
        <DashboardNotificationJob />
        <DashboardNotificationJob />
        <DashboardNotificationJob />
        <DashboardNotificationJob />
        <DashboardNotificationJob />
        <DashboardNotificationJob />
        <DashboardNotificationJob />
      </div>
    </div>
  </div>
);

export default DashboardNotificationList;
