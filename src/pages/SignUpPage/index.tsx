import React, { FC } from 'react';
import signupImage from '../../theme/images/signup-big-fig.png';

const SignUpPage: FC = () => (
  <section
    className="pxp-hero vh-100"
    style={{ backgroundColor: 'var(--pxpMainColorLight)' }}
  >
    <div className="row align-items-center pxp-sign-hero-container">
      <div className="col-xl-6 pxp-column">
        <div className="pxp-sign-hero-fig text-center pb-100 pt-100">
          <img src={signupImage} alt="Sign up" />
          <h1 className="mt-4 mt-lg-5">Create an account</h1>
        </div>
      </div>
      <div className="col-xl-6 pxp-column pxp-is-light">
        <div className="pxp-sign-hero-form pb-100 pt-100">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xl-7 col-xxl-5">
              <div className="pxp-sign-hero-form-content">
                <h5 className="text-center">Sign Up</h5>
                <form className="mt-4">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="pxp-signup-page-email"
                      placeholder="Email address"
                    />
                    <label htmlFor="pxp-signup-page-email">Email address</label>
                    <span className="fa fa-envelope-o" />
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="pxp-signup-page-password"
                      placeholder="Create password"
                    />
                    <label htmlFor="pxp-signup-page-password">
                      Create password
                    </label>
                    <span className="fa fa-lock" />
                  </div>
                  <button
                    className="btn rounded-pill pxp-sign-hero-form-cta btn-full-width"
                    type="submit"
                  >
                    Continue
                  </button>
                  <div className="mt-4 text-center pxp-sign-hero-form-small">
                    Already have an account?
                    <a href="sign-in.html">Sign in</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default SignUpPage;
