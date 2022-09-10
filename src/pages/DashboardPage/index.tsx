import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import RecruiterDashboardPage from '../RecruiterDashboardPage';
import { selectUserType } from '../../store/user/selectors';
import CandidateDashboardPage from '../CandidateDashboardPage';

const DashboardPage: FC = () => {
  const userType = useSelector(selectUserType);
  console.log(userType);
  return (
    <div>
      {userType === 2 && <RecruiterDashboardPage />}
      {userType === 3 && <CandidateDashboardPage />}
    </div>
  );
};

export default DashboardPage;
