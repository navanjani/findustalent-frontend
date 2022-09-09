import React, { FC, ReactNode, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserWithStoredToken } from '../../store/user/thunks';
import { useAppDispatch } from '../../store';
import { selectToken, selectUser } from '../../store/user/selectors';
import { SIGNIN_PAGE_ROUTE } from '../../config/routes';

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: FC<DashboardProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    if (token === null && user === null) {
      navigate(SIGNIN_PAGE_ROUTE);
    }
  }, [dispatch]);

  useMemo(() => {
    if (token === null && user === null) {
      navigate(SIGNIN_PAGE_ROUTE);
    }
  }, [token, user]);
  return <div className="dashboard-wrapper">{children}</div>;
};

export default Dashboard;
