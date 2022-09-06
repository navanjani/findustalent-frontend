import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import signinImage from '../../theme/images/signin-big-fig.png';
import FormInput from '../../components/FormInput';
import { HOME_PAGE_ROUTE, SIGNUP_PAGE_ROUTE } from '../../config/routes';

const SigninPage: FC = () => (
  <section className="pxp-hero vh-100" style={{ backgroundColor: 'var(--pxpMainColorLight)' }}>
    <div className="row align-items-center pxp-sign-hero-container">
      <div className="col-xl-6 pxp-column">
        <div className="pxp-sign-hero-fig text-center pb-100 pt-100">
          <img src={signinImage} alt="Sign up" />
          <h1 className="mt-4 mt-lg-5">Welcome back!</h1>
        </div>
      </div>
      <div className="col-xl-6 pxp-column pxp-is-light">
        <div className="pxp-sign-hero-form pb-100 pt-100">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xl-7 col-xxl-5">
              <div className="pxp-sign-hero-form-content">
                <h5 className="text-center">Sign In</h5>
                <form className="mt-4">
                  <div className="form-floating mb-3">
                    <FormInput
                      type="text"
                      label="Email Address"
                      icon="fa-envelope-o"
                      onChangeHandler={(e) => {
                        console.log(e);
                      }}
                    />
                  </div>
                  <div className="form-floating mb-3">
                    <FormInput
                      type="password"
                      label="Password"
                      icon="fa-lock"
                      onChangeHandler={(e) => {
                        console.log(e);
                      }}
                    />
                  </div>
                  <button className="btn rounded-pill pxp-sign-hero-form-cta btn-full-width" type="submit">
                    Continue
                  </button>
                  <div className="mt-4 text-center pxp-sign-hero-form-small">
                    <NavLink to={HOME_PAGE_ROUTE} className="pxp-modal-link">
                      Forgot password
                    </NavLink>
                  </div>
                  <div className="mt-4 text-center pxp-sign-hero-form-small">
                    New to findustalent?
                    <NavLink to={SIGNUP_PAGE_ROUTE}>Create an account</NavLink>
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

export default SigninPage;
