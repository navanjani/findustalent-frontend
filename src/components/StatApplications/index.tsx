import React, { FC } from 'react';

const StatApplications: FC = () => (
  <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
    <div className="pxp-dashboard-stats-card-icon text-success">
      <span className="fa fa-user-circle-o" />
    </div>
    <div className="pxp-dashboard-stats-card-info">
      <div className="pxp-dashboard-stats-card-info-number">312</div>
      <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Applications</div>
    </div>
  </div>
);
export default StatApplications;
