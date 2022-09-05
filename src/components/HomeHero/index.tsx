import React, { FC } from 'react';
import './style.scss';
import banner from '../../theme/images/hero-illustration.png';

const HomeHero: FC = () => (
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
            <div className="pxp-header-side-image pxp-has-animation">
              <img src={banner} alt="Find the perfect job for you" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="pxp-hero-logos-carousel-container">
      <div className="pxp-container">
        <div className="row pxp-pl-80">
          <div className="col-12 col-xl-6">
            <div className="pxp-hero-logos-carousel owl-carousel">
              <img src="images/hero-logo-1.svg" alt="Logo 1" />
              <img src="images/hero-logo-2.svg" alt="Logo 2" />
              <img src="images/hero-logo-3.svg" alt="Logo 3" />
              <img src="images/hero-logo-4.svg" alt="Logo 4" />
              <img src="images/hero-logo-5.svg" alt="Logo 5" />
              <img src="images/hero-logo-6.svg" alt="Logo 6" />
              <img src="images/hero-logo-7.svg" alt="Logo 7" />
              <img src="images/hero-logo-1.svg" alt="Logo 8" />
              <img src="images/hero-logo-2.svg" alt="Logo 9" />
              <img src="images/hero-logo-3.svg" alt="Logo 10" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="pxp-hero-right-bg-card pxp-has-animation" />
  </section>
);

export default HomeHero;
