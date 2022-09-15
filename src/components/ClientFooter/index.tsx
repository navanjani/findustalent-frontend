import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  DASHBOARD_ADD_JOB_ROUTE,
  DASHBOARD_CANDIDATE_APPLICATIONS_ROUTE,
  DASHBOARD_HOME_ROUTE,
  HOME_PAGE_ROUTE,
  DASHBOARD_MANAGE_JOBS_ROUTE,
  DASHBOARD_RECRUITER_CANDIDATE_ROUTE,
  PRICING_PAGE_ROUTE,
  SIGNIN_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
} from '../../config/routes';
import BadgePillSuccess from '../BadgePillSuccess';

const ClientFooter: FC = () => (
  <footer className="pxp-main-footer mt-100">
    <div
      className="pxp-main-footer-top pt-100 pb-100"
      style={{ backgroundColor: 'var(--pxpMainColorLight)' }}
    >
      <div className="pxp-container">
        <div className="row">
          <div className="col-lg-6 col-xl-5 col-xxl-4 mb-4">
            <div className="pxp-footer-logo">
              <NavLink to="/" className="pxp-animate">
                <span style={{ color: 'var(--pxpMainColor)' }}>findus</span>
                talent
              </NavLink>
            </div>
            <div className="pxp-footer-section mt-3 mt-md-4">
              <h3>Call us</h3>
              <div className="pxp-footer-phone">(123) 456-7890</div>
            </div>
            <div className="mt-3 mt-md-4 pxp-footer-section">
              <div className="pxp-footer-text">
                90 Fifth Avenue, 3rd Floor
                <br />
                San Francisco, CA 1980
                <br />
                help@findustalent.com
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7 col-xxl-8">
            <div className="row">
              <div className="col-md-6 col-xl-4 col-xxl-3 mb-4">
                <div className="pxp-footer-section">
                  <h3>For Candidates</h3>
                  <ul className="pxp-footer-list">
                    <li>
                      <Link to={HOME_PAGE_ROUTE}>Apply for Jobs</Link>
                    </li>
                    <li>
                      <Link to={DASHBOARD_HOME_ROUTE}>Candidate Dashboard </Link>
                    </li>
                    <li>
                      <Link to={DASHBOARD_CANDIDATE_APPLICATIONS_ROUTE}>My Applications</Link>
                    </li>
                    <li>
                      <Link to={HOME_PAGE_ROUTE}>
                        My inbox <BadgePillSuccess label="pending" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-xxl-3 mb-4">
                <div className="pxp-footer-section">
                  <h3>For Employers</h3>
                  <ul className="pxp-footer-list">
                    <li>
                      <Link to={HOME_PAGE_ROUTE}>
                        Find Candidates <BadgePillSuccess label="pending" />
                      </Link>
                    </li>
                    <li>
                      <Link to={DASHBOARD_HOME_ROUTE}>Company Dashboard</Link>
                    </li>
                    <li>
                      <Link to={DASHBOARD_ADD_JOB_ROUTE}>Post a Job</Link>
                    </li>
                    <li>
                      <Link to={DASHBOARD_MANAGE_JOBS_ROUTE}>Manage Jobs</Link>
                    </li>
                    <li>
                      <Link to={DASHBOARD_RECRUITER_CANDIDATE_ROUTE}>Candidates</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-xxl-3 mb-4">
                <div className="pxp-footer-section">
                  <h3>About Us</h3>
                  <ul className="pxp-footer-list">
                    <li>
                      <Link to={HOME_PAGE_ROUTE}>
                        About Us <BadgePillSuccess label="pending" />
                      </Link>
                    </li>
                    <li>
                      <Link to={PRICING_PAGE_ROUTE}>Pricing</Link>
                    </li>
                    <li>
                      <Link to={HOME_PAGE_ROUTE}>
                        Contact Us <BadgePillSuccess label="pending" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-xxl-3 mb-4">
                <div className="pxp-footer-section">
                  <h3>Helpful Resources</h3>
                  <ul className="pxp-footer-list">
                    <li>
                      <Link to={SIGNIN_PAGE_ROUTE}>Sign In</Link>
                    </li>
                    <li>
                      <Link to={SIGNUP_PAGE_ROUTE}>Sign Up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pxp-main-footer-bottom" style={{ backgroundColor: 'var(--pxpSecondaryColor)' }}>
      <div className="pxp-container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-auto">
            <div className="pxp-footer-copyright pxp-text-light">
              © 2022 findustalent. All Right Reserved.
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="pxp-footer-social mt-3 mt-lg-0">
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/">
                    <span className="fa fa-facebook" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span className="fa fa-twitter" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span className="fa fa-instagram" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span className="fa fa-linkedin" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default ClientFooter;
