import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import signupImageCandidate from '../../theme/images/customer-2.png';
import signupImageRecruiter from '../../theme/images/customer-4.png';
import { CANDIDATE_SIGNUP_PAGE_ROUTE, RECRUITER_SIGNUP_PAGE_ROUTE } from '../../config/routes';

const SignUpPage: FC = () => (
  <section className="pxp-hero vh-100" style={{ backgroundColor: 'var(--pxpMainColorLight)' }}>
    <div className="row align-items-center pxp-sign-hero-container">
      <div className="col-xl-6 pxp-column">
        <div className="pxp-sign-hero-fig text-center pb-100 pt-100">
          <img src={signupImageRecruiter} alt="Sign up" />
          <h1 className="mt-4 mt-lg-5">Recruiter</h1>
          <NavLink to={RECRUITER_SIGNUP_PAGE_ROUTE}>
            <button type="button" className="btn rounded-pill pxp-modal-cta">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
      <div className="col-xl-6 pxp-column pxp-is-light">
        <div className="pxp-sign-hero-fig text-center pb-100 pt-100">
          <img src={signupImageCandidate} alt="Sign up" />
          <h1 className="mt-4 mt-lg-5">Candidate</h1>
          <NavLink to={CANDIDATE_SIGNUP_PAGE_ROUTE}>
            <button type="button" className="btn rounded-pill pxp-modal-cta">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);
export default SignUpPage;
