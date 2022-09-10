import React, { FC } from 'react';
import DashboardRecruiter from '../../components/DashboardRecruiter';
import DashboardChangePassword from '../../components/DashboardChangePassword';

const RecruiterDashboardChangePasswordPage: FC = () => (
  <DashboardRecruiter>
    <DashboardChangePassword />
  </DashboardRecruiter>
);
export default RecruiterDashboardChangePasswordPage;
