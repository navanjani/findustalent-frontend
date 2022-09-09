import React, { FC } from 'react';
import HomeHero from '../../components/HomeHero';
import PublicPage from '../../components/PublicPage';

const HomePage: FC = () => (
  <PublicPage>
    <HomeHero />
  </PublicPage>
);

export default HomePage;
