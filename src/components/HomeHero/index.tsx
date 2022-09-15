import React, { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import './style.scss';
import banner from '../../theme/images/hero-illustration.png';
import { animationClasses } from '../../config/animations';
import ButtonFullWidth from '../ButtonFullWidth';
import { SIGNUP_PAGE_ROUTE } from '../../config/routes';

const HomeHero: FC = () => {
  // https://reactcommunity.org/react-transition-group/css-transition
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 500);
  });

  return (
    <section className="pxp-hero vh-100" style={{ backgroundColor: 'var(--pxpMainColorLight)' }}>
      <div className="pxp-hero-caption">
        <div className="pxp-container">
          <div className="row pxp-pl-80 align-items-center justify-content-between">
            <div className="col-12 col-xl-6 col-xxl-5">
              <h1>
                Find the perfect
                <br />
                <span style={{ color: 'var(--pxpMainColor)' }}>talent</span> for your job openings
              </h1>
              <div className="pxp-hero-subtitle mt-3 mt-lg-4">
                Create your own <strong>customized</strong> career page
              </div>
              <div className="pxp-hero-subtitle mt-4 mt-lg-4">
                <Link to={SIGNUP_PAGE_ROUTE}>
                  <ButtonFullWidth label="Create an account" />
                </Link>
              </div>
            </div>
            <div className="d-none d-xl-block col-xl-5 position-relative">
              <CSSTransition in={inProp} timeout={500} classNames={animationClasses}>
                <div className="pxp-header-side-image pxp-has-animation">
                  <img src={banner} alt="Find the perfect job for you" />
                </div>
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>

      <CSSTransition in={inProp} timeout={200} classNames={animationClasses}>
        <div className="pxp-hero-right-bg-card pxp-has-animation" />
      </CSSTransition>
    </section>
  );
};

export default HomeHero;
