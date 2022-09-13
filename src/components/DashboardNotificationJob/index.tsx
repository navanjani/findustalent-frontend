import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { IJobCandidate } from '../../types/jobCandidates';

interface IDashboardNotificationJob {
  candidate: IJobCandidate;
}
const DashboardNotificationJob: FC<IDashboardNotificationJob> = ({
  candidate,
}: IDashboardNotificationJob) => (
  <div className="pxp-dashboard-notifications-item mb-3">
    <div className="pxp-dashboard-notifications-item-left">
      <div className="pxp-dashboard-notifications-item-type">
        <span className="fa fa-briefcase" />
      </div>
      <div className="pxp-dashboard-notifications-item-message">
        <Link to="/">
          <span>
            {candidate.firstName} {candidate.lastName}
          </span>
        </Link>{' '}
        applied for{' '}
        <Link to="/">
          <span>{candidate.job?.title}</span>
        </Link>
      </div>
    </div>
    <div className="pxp-dashboard-notifications-item-right">
      {' '}
      {moment(candidate.createdAt).format('MMMM Do YYYY, h:mm a')}
    </div>
  </div>
);

export default DashboardNotificationJob;
