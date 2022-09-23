import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StatJobPosted from '../../components/StatJobPosted';
import StatApplications from '../../components/StatApplications';
import StatNotifications from '../../components/StatNotifications';
import DashboardNotificationList from '../../components/DashboardNotificationList';
import DashboardRecentCandidates from '../../components/DashboardRecentCandidates';
import DashboardRecruiter from '../../components/DashboardRecruiter';
import { useAppDispatch } from '../../store';

import { selectCompanyCandidates, selectCompanyJobs } from '../../store/company/selectors';
import { fetchCompanyCandidates, fetchCompanyJobs } from '../../store/company/thunks';
import { selectUser } from '../../store/user/selectors';

const RecruiterDashboardPage: FC = () => {
  const dispatch = useAppDispatch();
  const jobs = useSelector(selectCompanyJobs);
  const candidates = useSelector(selectCompanyCandidates);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user?.companyId) {
      dispatch(fetchCompanyJobs());
      dispatch(fetchCompanyCandidates());
    }
  }, [dispatch, user]);

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
          <StatApplications candidates={candidates} />
        </div>
        {/* <div className="col-sm-6 col-xxl-3"> */}
        {/*  <StatUnreadMessages /> */}
        {/* </div> */}
        <div className="col-sm-6 col-xxl-4">
          <StatNotifications candidates={candidates} />
        </div>
      </div>
      <DashboardNotificationList candidates={candidates} />
      {candidates && <DashboardRecentCandidates candidates={candidates} />}
    </DashboardRecruiter>
  );
};
export default RecruiterDashboardPage;
