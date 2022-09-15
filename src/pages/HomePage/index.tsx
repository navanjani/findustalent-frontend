import React, { FC, useEffect } from 'react';
import HomeHero from '../../components/HomeHero';
import { setBodyColorLightBlue, setShowClientNavBar } from '../../store/appState/slice';
import { useAppDispatch } from '../../store';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBodyColorLightBlue());
    dispatch(setShowClientNavBar(true));
  }, [dispatch]);

  return (
    <div className="public-page-wrapper">
      <HomeHero />
    </div>
  );
};

export default HomePage;
