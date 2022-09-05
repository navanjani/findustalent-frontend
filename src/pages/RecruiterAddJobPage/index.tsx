import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { setBodyColorLightBlue, setShowClientNavBar } from '../../store/appState/slice';

import DashboardRecruiter from '../../components/DashboardRecruiter';

const RecruiterDashboardPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBodyColorLightBlue());
    dispatch(setShowClientNavBar(false));
  }, [dispatch]);
  return <DashboardRecruiter>Hello</DashboardRecruiter>;
};
export default RecruiterDashboardPage;
