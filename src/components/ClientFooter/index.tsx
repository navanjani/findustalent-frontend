import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

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
                office@jobster.com
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
                      <a href="jobs-list-1.html">Find Jobs</a>
                    </li>
                    <li>
                      <a href="candidate-dashboard.html">Candidate Dashboard</a>
                    </li>
                    <li>
                      <a href="candidate-dashboard-applications.html">My Applications</a>
                    </li>
                    <li>
                      <a href="candidate-dashboard-fav-jobs.html">Favourite Jobs</a>
                    </li>
                    <li>
                      <a href="candidate-dashboard-inbox.html">My inbox</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-xxl-3 mb-4">
                <div className="pxp-footer-section">
                  <h3>For Employers</h3>
                  <ul className="pxp-footer-list">
                    <li>
                      <a href="candidates-list-1.html">Find Candidates</a>
                    </li>
                    <li>
                      <a href="company-dashboard.html">Company Dashboard</a>
                    </li>
                    <li>
                      <a href="company-dashboard-new-job.html">Post a Job</a>
                    </li>
                    <li>
                      <a href="company-dashboard-jobs.html">Manage Jobs</a>
                    </li>
                    <li>
                      <a href="company-dashboard-candidates.html">Candidates</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-xxl-3 mb-4">
                <div className="pxp-footer-section">
                  <h3>About Us</h3>
                  <ul className="pxp-footer-list">
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="blog-list-1.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-list-1.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 col-xxl-3 mb-4">
                <div className="pxp-footer-section">
                  <h3>Helpful Resources</h3>
                  <ul className="pxp-footer-list">
                    <li>
                      <a href="faqs.html">FAQs</a>
                    </li>
                    <li>
                      <a href="sign-in.html">Sign In</a>
                    </li>
                    <li>
                      <a href="sign-up.html">Sign Up</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
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
              © 2021 findustalent. All Right Reserved.
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
