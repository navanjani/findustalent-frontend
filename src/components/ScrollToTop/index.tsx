import React, { FC, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IComponentWithChildren } from '../../types/components';

const ScrollToTop: FC<IComponentWithChildren> = ({ children }: IComponentWithChildren) => {
  // https://stackoverflow.com/questions/71792327/react-router-dom-v6-scroll-to-top-on-route-change
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  /* eslint react/jsx-no-useless-fragment:0 */
  return <>{children}</>;
};

export default ScrollToTop;
