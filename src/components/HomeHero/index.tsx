import React, { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.scss';
import banner from '../../theme/images/hero-illustration.png';
import { animationClasses } from '../../config/animations';

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
                <span style={{ color: 'var(--pxpMainColor)' }}>job</span>
                for you
              </h1>
              <div className="pxp-hero-subtitle mt-3 mt-lg-4">
                Search your career opportunity through
                <strong>12,800</strong>
                jobs
              </div>

              <div className="pxp-hero-form pxp-hero-form-round mt-3 mt-lg-4">
                <form className="row gx-3 align-items-center" action="jobs-list-1.html">
                  <div className="col-12 col-sm">
                    <div className="mb-3 mb-sm-0">
                      <input type="text" className="form-control" placeholder="Job Title or Keyword" />
                    </div>
                  </div>
                  <div className="col-12 col-sm pxp-has-left-border">
                    <div className="mb-3 mb-sm-0">
                      <input type="text" className="form-control" placeholder="Location" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-auto">
                    <button type="submit">
                      <span className="fa fa-search" />
                    </button>
                  </div>
                </form>
              </div>

              <div className="pxp-hero-searches-container">
                <div className="pxp-hero-searches-label">Popular Searches</div>
                <div className="pxp-hero-searches">
                  <div className="pxp-hero-searches-items">
                    <a href="jobs-list-1.html">Work from home</a>
                    <a href="jobs-list-1.html">Part-time</a>
                    <a href="jobs-list-1.html">Administration</a>
                    <a href="jobs-list-1.html">Finance</a>
                    <a href="jobs-list-1.html">Retail</a>
                    <a href="jobs-list-1.html">IT</a>
                    <a href="jobs-list-1.html">Engineering</a>
                    <a href="jobs-list-1.html">Sales</a>
                    <a href="jobs-list-1.html">Manufacturing</a>
                  </div>
                </div>
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
