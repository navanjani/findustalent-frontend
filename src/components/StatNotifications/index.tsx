import React, { FC } from 'react';
import { IJobCandidate } from '../../types/jobCandidates';

interface IStatNotifications {
  candidates: IJobCandidate[];
}

const StatNotifications: FC<IStatNotifications> = ({ candidates }: IStatNotifications) => (
  <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
    <div className="pxp-dashboard-stats-card-icon text-danger">
      <span className="fa fa-bell-o" />
    </div>
    <div className="pxp-dashboard-stats-card-info">
      <div className="pxp-dashboard-stats-card-info-number">{candidates.length}</div>
      <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Notifications</div>
    </div>
  </div>
);

export default StatNotifications;
