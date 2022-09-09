import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { setBodyColorWhite, setShowClientNavBar } from '../../store/appState/slice';
import { IComponentWithChildren } from '../../types/components';

const PublicPage: FC<IComponentWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBodyColorWhite());
    dispatch(setShowClientNavBar(true));
  }, [dispatch]);

  return <div className="public-page-wrapper">{children}</div>;
};

export default PublicPage;
