import React, { FC } from 'react';

const StatUnreadMessages: FC = () => (
  <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
    <div className="pxp-dashboard-stats-card-icon text-warning">
      <span className="fa fa-envelope-o" />
    </div>
    <div className="pxp-dashboard-stats-card-info">
      <div className="pxp-dashboard-stats-card-info-number">14</div>
      <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Unread messages</div>
    </div>
  </div>
);

export default StatUnreadMessages;
