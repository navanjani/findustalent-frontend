import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { setBodyColorWhite, setShowClientNavBar } from '../../store/appState/slice';
import { IComponentWithChildren } from '../../types/components';

interface IPublicPage extends IComponentWithChildren {
  hasMargin?: boolean;
}

const PublicPage: FC<IPublicPage> = ({ hasMargin, children }: IPublicPage) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBodyColorWhite());
    dispatch(setShowClientNavBar(true));
  }, [dispatch]);

  return <div className={`public-page-wrapper ${hasMargin ? 'mb-100' : ''}`}>{children}</div>;
};
PublicPage.defaultProps = {
  hasMargin: false,
};
export default PublicPage;
