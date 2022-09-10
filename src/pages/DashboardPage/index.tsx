import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RecruiterDashboardPage from '../RecruiterDashboardPage';
import { selectToken, selectUser, selectUserType } from '../../store/user/selectors';
import CandidateDashboardPage from '../CandidateDashboardPage';
import { SIGNIN_PAGE_ROUTE } from '../../config/routes';

const DashboardPage: FC = () => {
  const navigate = useNavigate();
  const userType = useSelector(selectUserType);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token === null) {
      navigate(SIGNIN_PAGE_ROUTE);
    }
  }, [token, user]);

  return (
    <div>
      {userType === 2 && <RecruiterDashboardPage />}
      {userType === 3 && <CandidateDashboardPage />}
    </div>
  );
};

export default DashboardPage;
