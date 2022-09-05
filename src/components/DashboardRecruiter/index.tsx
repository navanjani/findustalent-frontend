import React, { FC, ReactNode } from 'react';
import DashboardAppLogo from '../DashboardAppLogo';
import DashboardLeftNav from '../DashboardLeftNav';
import DashboardLeftFooter from '../DashboardLeftFooter';
import DashboardMobileNav from '../DashboardMobileNav';
import DashboardNav from '../DashboardNav';
import DashboardFooter from '../DashboardFooter';

interface DashboardRecruiterProps {
  children: ReactNode;
}

const DashboardRecruiter: FC<DashboardRecruiterProps> = ({ children }) => (
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
      <div className="pxp-dashboard-content-details">{children}</div>
      <DashboardFooter />
    </div>
  </>
);

export default DashboardRecruiter;
