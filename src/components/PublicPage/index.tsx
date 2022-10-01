import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { setBodyColorWhite, setLightPage, setShowClientNavBar } from '../../store/appState/slice';
import { IComponentWithChildren } from '../../types/components';

interface IPublicPage extends IComponentWithChildren {
  hasMargin?: boolean;
  lightPage?: boolean;
}

const PublicPage: FC<IPublicPage> = ({ hasMargin, lightPage, children }: IPublicPage) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBodyColorWhite());
    dispatch(setShowClientNavBar(true));
    dispatch(setLightPage(lightPage));
  }, [dispatch]);

  return <div className={`public-page-wrapper ${hasMargin ? 'mb-100' : ''}`}>{children}</div>;
};
PublicPage.defaultProps = {
  hasMargin: false,
  lightPage: true,
};
export default PublicPage;
