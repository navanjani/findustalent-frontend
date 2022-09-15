import React, { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PublicPage from '../../components/PublicPage';
import { animationClassesTop } from '../../config/animations';

const PricingPage: FC = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 500);
  });
  return (
    <PublicPage hasMargin>
      <section className="mt-100 pxp-no-hero">
        <div className="pxp-container">
          <h2 className="pxp-section-h2">Price Plans</h2>
          <p className="pxp-text-light">Choose the plan that suits you best</p>

          <div className="mt-4 mt-md-5">
            <div
              className="btn-group pxp-price-plans-switcher"
              role="group"
              aria-label="Price plans switcher"
            >
              <input
                type="radio"
                className="btn-check"
                name="pxp-price-plans-switcher"
                id="pxp-price-plan-monthly"
                data-period="month"
              />
              <label className="btn btn-outline-primary" htmlFor="pxp-price-plan-monthly">
                Monthly
              </label>

              <input
                type="radio"
                className="btn-check"
                name="pxp-price-plans-switcher"
                id="pxp-price-plan-nnnual"
                data-period="year"
              />
              <label className="btn btn-outline-primary" htmlFor="pxp-price-plan-nnnual">
                Annual
              </label>
            </div>
          </div>
          <CSSTransition in={inProp} timeout={500} classNames={animationClassesTop}>
            <div className="row mt-3 mt-md-4 pxp-animate-in pxp-animate-in-top">
              <div className="col-md-6 col-xl-4 col-xxl-3 pxp-plans-card-1-container">
                <div className="pxp-plans-card-1">
                  <div className="pxp-plans-card-1-top">
                    <div className="pxp-plans-card-1-title">Basic</div>
                    <div className="pxp-plans-card-1-price">
                      <div className="pxp-plans-price-monthly">
                        €199<span className="pxp-period">/month</span>
                      </div>
                      <div className="pxp-plans-price-annual">
                        €189<span className="pxp-period">/year</span>
                      </div>
                    </div>
                    <div className="pxp-plans-card-1-list">
                      <ul className="list-unstyled">
                        <li>
                          <img src="images/check.svg" alt="" />1 job posting
                        </li>
                        <li>
                          <img src="images/check.svg" alt="" />0 featured job
                        </li>
                        <li>
                          <img src="images/check.svg" alt="" />
                          Job displayed for 20 days
                        </li>
                        <li>
                          <img src="images/check.svg" alt="" />
                          Premium Support 24/7
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pxp-plans-card-1-bottom">
                    <div className="pxp-plans-card-1-cta">
                      <button type="button" className="btn rounded-pill pxp-card-btn">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-xxl-3 pxp-plans-card-1-container">
                <div className="pxp-plans-card-1">
                  <div className="pxp-plans-card-1-top">
                    <div className="pxp-plans-card-1-title">Standard</div>
                    <div className="pxp-plans-card-1-price">
                      <div className="pxp-plans-price-monthly">
                        €299<span className="pxp-period">/month</span>
                      </div>
                      <div className="pxp-plans-price-annual">
                        €289<span className="pxp-period">/year</span>
                      </div>
                    </div>
                    <div className="pxp-plans-card-1-list">
                      <ul className="list-unstyled">
                        <li>
                          <img src="images/check.svg" alt="" />1 job posting
                        </li>
                        <li>
                          <img src="images/check.svg" alt="" />0 featured job
                        </li>
                        <li>
                          <img src="images/check.svg" alt="" />
                          Job displayed for 20 days
                        </li>
                        <li>
                          <img src="images/check.svg" alt="" />
                          Premium Support 24/7
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pxp-plans-card-1-bottom">
                    <div className="pxp-plans-card-1-cta">
                      <button type="button" className="btn rounded-pill pxp-card-btn">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-xxl-3 pxp-plans-card-1-container">
                <div className="pxp-plans-card-1 pxp-is-featured">
                  <div className="pxp-plans-card-1-top">
                    <div className="pxp-plans-card-1-featured-label">Recommended</div>
                    <div className="pxp-plans-card-1-title">Professional</div>
                    <div className="pxp-plans-card-1-price">
                      <div className="pxp-plans-price-monthly">
                        €499<span className="pxp-period">/month</span>
                      </div>
                      <div className="pxp-plans-price-annual">
                        €489<span className="pxp-period">/year</span>
                      </div>
                    </div>
                    <div className="pxp-plans-card-1-list">
                      <ul className="list-unstyled">
                        <li>
                          <img src="images/check-light.svg" alt="" />1 job posting
                        </li>
                        <li>
                          <img src="images/check-light.svg" alt="" />0 featured job
                        </li>
                        <li>
                          <img src="images/check-light.svg" alt="" />
                          Job displayed for 20 days
                        </li>
                        <li>
                          <img src="images/check-light.svg" alt="" />
                          Premium Support 24/7
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pxp-plans-card-1-bottom">
                    <div className="pxp-plans-card-1-cta">
                      <button type="button" className="btn rounded-pill pxp-card-btn">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-xxl-3 pxp-plans-card-1-container">
                <div className="pxp-plans-card-1">
                  <div className="pxp-plans-card-1-top">
                    <div className="pxp-plans-card-1-title">Extended</div>
                    <div className="pxp-plans-card-1-price">
                      <div className="pxp-plans-price-monthly">
                        $799<span className="pxp-period">/month</span>
                      </div>
                      <div className="pxp-plans-price-annual">
                        $789<span className="pxp-period">/year</span>
                      </div>
                    </div>
                    <div className="pxp-plans-card-1-list">
                      <ul className="list-unstyled">
                        <li>
                          <img src="images/check.svg" alt="" />1 job posting
                        </li>
                        <li>
                          <img src="images/check.svg" alt="" />0 featured job
                        </li>
                        <li>
                          <img src="images/check.svg" alt="" />
                          Job displayed for 20 days
                        </li>
                        <li>
                          <img src="images/check.svg" alt="" />
                          Premium Support 24/7
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pxp-plans-card-1-bottom">
                    <div className="pxp-plans-card-1-cta">
                      <button type="button" className="btn rounded-pill pxp-card-btn">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </section>
    </PublicPage>
  );
};
export default PricingPage;
