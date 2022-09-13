import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StatJobPosted from '../../components/StatJobPosted';
import StatApplications from '../../components/StatApplications';
import StatNotifications from '../../components/StatNotifications';
import DashboardNotificationList from '../../components/DashboardNotificationList';
import DashboardRecentCandidates from '../../components/DashboardRecentCandidates';
import DashboardRecruiter from '../../components/DashboardRecruiter';
import { useAppDispatch } from '../../store';

import { selectCompanyJobs } from '../../store/company/selectors';
import { fetchCompanyJobs } from '../../store/company/thunks';

const RecruiterDashboardPage: FC = () => {
  const dispatch = useAppDispatch();
  const jobs = useSelector(selectCompanyJobs);

  useEffect(() => {
    dispatch(fetchCompanyJobs());
  }, [dispatch]);
  return (
    <DashboardRecruiter>
      <div>
        <h1>Dashboard</h1>
        <p className="pxp-text-light">Welcome to Findustalent!</p>
      </div>
      <div className="row mt-4 mt-lg-5 align-items-center">
        <div className="col-sm-6 col-xxl-4">
          <StatJobPosted jobs={jobs} />
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
};
export default RecruiterDashboardPage;
