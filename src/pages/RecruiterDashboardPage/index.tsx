import React, { FC } from 'react';
import StatJobPosted from '../../components/StatJobPosted';
import StatApplications from '../../components/StatApplications';
import StatNotifications from '../../components/StatNotifications';
import DashboardNotificationList from '../../components/DashboardNotificationList';
import DashboardRecentCandidates from '../../components/DashboardRecentCandidates';
import DashboardRecruiter from '../../components/DashboardRecruiter';

const RecruiterDashboardPage: FC = () => (
  <DashboardRecruiter>
    <div>
      <h1>Dashboard</h1>
      <p className="pxp-text-light">Welcome to Findustalent!</p>
    </div>
    <div className="row mt-4 mt-lg-5 align-items-center">
      <div className="col-sm-6 col-xxl-4">
        <StatJobPosted />
      </div>
      <div className="col-sm-6 col-xxl-4">
        <StatApplications />
      </div>
      {/* <div className="col-sm-6 col-xxl-3"> */}
      {/*  <StatUnreadMessages /> */}
      {/* </div> */}
      <div className="col-sm-6 col-xxl-4">
        <StatNotifications />
      </div>
    </div>
    <DashboardNotificationList />
    <DashboardRecentCandidates />
  </DashboardRecruiter>
);
export default RecruiterDashboardPage;
