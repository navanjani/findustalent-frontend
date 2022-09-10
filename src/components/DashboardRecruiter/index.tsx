import React, { FC, useEffect } from 'react';
import DashboardLeftNav from '../DashboardLeftNav';
import DashboardLeftFooter from '../DashboardLeftFooter';
import DashboardMobileNav from '../DashboardMobileNav';
import DashboardNav from '../DashboardNav';
import DashboardFooter from '../DashboardFooter';
import DashboardAppLogo from '../DashboardAppLogo';
import Dashboard from '../Dashboard';
import { IComponentWithChildren } from '../../types/components';
import { useAppDispatch } from '../../store';
import {
  fetchCareerLevels,
  fetchCategories,
  fetchEmploymentTypes,
  fetchSalaryRanges,
} from '../../store/jobs/thunks';
import { fetchCompanyDepartments } from '../../store/company/thunks';

const DashboardRecruiter: FC<IComponentWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmploymentTypes());
    dispatch(fetchCareerLevels());
    dispatch(fetchCompanyDepartments());
    dispatch(fetchSalaryRanges());
    dispatch(fetchCategories());
  }, [dispatch]);

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
          <DashboardNav />
        </div>
        <div className="pxp-dashboard-content-details">{children}</div>
        <DashboardFooter />
      </div>
    </Dashboard>
  );
};

export default DashboardRecruiter;
