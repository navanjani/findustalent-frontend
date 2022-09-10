import React, { FC } from 'react';
import DashboardCandidate from '../../components/DashboardCandidate';
import DashboardChangePassword from '../../components/DashboardChangePassword';

const CandidateDashboardChangePasswordPage: FC = () => (
  <DashboardCandidate>
    <DashboardChangePassword />
  </DashboardCandidate>
);
export default CandidateDashboardChangePasswordPage;
