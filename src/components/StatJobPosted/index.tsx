import React, { FC } from 'react';
import { IJob } from '../../types/jobs';

interface IStatJobPosted {
  jobs: IJob[];
}
const StatJobPosted: FC<IStatJobPosted> = ({ jobs }: IStatJobPosted) => (
  <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
    <div className="pxp-dashboard-stats-card-icon text-primary">
      <span className="fa fa-file-text-o" />
    </div>
    <div className="pxp-dashboard-stats-card-info">
      <div className="pxp-dashboard-stats-card-info-number">{jobs.length}</div>
      <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Jobs posted</div>
    </div>
  </div>
);
export default StatJobPosted;
