import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardLeftNav from '../DashboardLeftNav';
import DashboardLeftFooter from '../DashboardLeftFooter';
import DashboardMobileNav from '../DashboardMobileNav';
import DashboardNav from '../DashboardNav';
import DashboardFooter from '../DashboardFooter';
import DashboardAppLogo from '../DashboardAppLogo';
import Dashboard from '../Dashboard';
import { IComponentWithChildren } from '../../types/components';
import { selectCompanyCandidates } from '../../store/company/selectors';
import { selectToken, selectUser } from '../../store/user/selectors';
import { COMPANY_REGISTER_ROUTE } from '../../config/routes';

const DashboardRecruiter: FC<IComponentWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const candidates = useSelector(selectCompanyCandidates);

  // Recruiter must have a company registered to go to the dashboard
  useEffect(() => {
    if (token !== null && user && user.userType === 2 && user.companyId === null) {
      navigate(COMPANY_REGISTER_ROUTE);
    }
  }, [user, token]);

  return (
    <Dashboard>
      <div className="pxp-dashboard-side-panel d-none d-lg-block">
        <DashboardAppLogo />
        <DashboardLeftNav />
        <DashboardLeftFooter />
      </div>

      <div className="pxp-dashboard-content">
        <div className="pxp-dashboard-content-header">
          <DashboardMobileNav />
          <DashboardNav candidates={candidates} />
        </div>
        <div className="pxp-dashboard-content-details">{children}</div>
        <DashboardFooter />
      </div>
    </Dashboard>
  );
};

export default DashboardRecruiter;
