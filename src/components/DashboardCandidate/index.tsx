import React, { FC, useEffect } from 'react';
import Dashboard from '../Dashboard';
import DashboardAppLogo from '../DashboardAppLogo';
import CandidateDashboardLeftNav from '../CandidateDashboardLeftNav';
import CandidateDashboardLeftFooter from '../CandidateDashboardLeftFooter';
import CandidateDashboardMobileNav from '../CandidateDashboardMobileNav';
import CandidateDashboardNav from '../CandidateDashboardNav';
import DashboardFooter from '../DashboardFooter';
import { IComponentWithChildren } from '../../types/components';
import { setBodyColorLightPink } from '../../store/appState/slice';
import { useAppDispatch } from '../../store';

const DashboardCandidate: FC<IComponentWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBodyColorLightPink());
  }, [dispatch]);

  return (
    <Dashboard>
      <div className="pxp-dashboard-side-panel d-none d-lg-block">
        <DashboardAppLogo />
        <CandidateDashboardLeftNav />
        <CandidateDashboardLeftFooter />
      </div>
      <div className="pxp-dashboard-content">
        <div className="pxp-dashboard-content-header pxp-is-candidate">
          <CandidateDashboardMobileNav />
          <CandidateDashboardNav />
        </div>
        <div className="pxp-dashboard-content-details">{children}</div>
        <DashboardFooter />
      </div>
    </Dashboard>
  );
};

export default DashboardCandidate;
