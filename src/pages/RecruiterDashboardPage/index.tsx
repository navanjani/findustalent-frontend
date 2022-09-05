import React, { FC, useEffect } from 'react';
import StatJobPosted from '../../components/StatJobPosted';
import StatApplications from '../../components/StatApplications';
import { useAppDispatch } from '../../store';
import { setBodyColorLightBlue, setShowClientNavBar } from '../../store/appState/slice';
import DashboardFooter from '../../components/DashboardFooter';
import DashboardAppLogo from '../../components/DashboardAppLogo';
import DashboardLeftNav from '../../components/DashboardLeftNav';
import DashboardLeftFooter from '../../components/DashboardLeftFooter';
import DashboardMobileNav from '../../components/DashboardMobileNav';
import DashboardNav from '../../components/DashboardNav';
// import StatUnreadMessages from '../../components/StatUnreadMessages';
import StatNotifications from '../../components/StatNotifications';
import DashboardNotificationList from '../../components/DashboardNotificationList';
import DashboardRecentCandidates from '../../components/DashboardRecentCandidates';

const RecruiterDashboardPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBodyColorLightBlue());
    dispatch(setShowClientNavBar(false));
  }, [dispatch]);
  return (
    <>
      <div className="pxp-dashboard-side-panel d-none d-lg-block">
        <DashboardAppLogo />
        <DashboardLeftNav />
        <DashboardLeftFooter />
      </div>

      <div className="pxp-dashboard-content">
        <div className="pxp-dashboard-content-header">
          <DashboardMobileNav />
          <DashboardNav />
        </div>
        <div className="pxp-dashboard-content-details">
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
        </div>
        <DashboardFooter />
      </div>
    </>
  );
};
export default RecruiterDashboardPage;
