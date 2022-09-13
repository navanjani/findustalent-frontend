import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import { fetchCompanyCandidates, fetchCompanyDepartments } from '../../store/company/thunks';

import { selectCompanyCandidates } from '../../store/company/selectors';

const DashboardRecruiter: FC<IComponentWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmploymentTypes());
    dispatch(fetchCareerLevels());
    dispatch(fetchSalaryRanges());
    dispatch(fetchCategories());
    dispatch(fetchCompanyDepartments());
    dispatch(fetchCompanyCandidates());
  }, [dispatch]);

  const candidates = useSelector(selectCompanyCandidates);
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
