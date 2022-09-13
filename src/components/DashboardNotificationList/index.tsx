import React, { FC } from 'react';
import DashboardNotificationJob from '../DashboardNotificationJob';
import { IJobCandidate } from '../../types/jobCandidates';

interface IDashboardNotificationList {
  candidates: IJobCandidate[];
}
const DashboardNotificationList: FC<IDashboardNotificationList> = ({
  candidates,
}: IDashboardNotificationList) => (
  <div className="row mt-4 mt-lg-5">
    <div className="col-xxl-8">
      <h2>Recent Notifications</h2>
      <div className="pxp-dashboard-notifications">
        {candidates &&
          candidates.map((candidate) => (
            <DashboardNotificationJob key={candidate.id} candidate={candidate} />
          ))}
      </div>
    </div>
  </div>
);

export default DashboardNotificationList;
