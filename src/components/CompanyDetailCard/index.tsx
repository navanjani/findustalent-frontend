import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const CompanyDetailCard: FC = () => (
  <>
    <div className="mt-4">
      <div className="pxp-single-company-side-info-label pxp-text-light">Industry</div>
      <div className="pxp-single-company-side-info-data">Software</div>
    </div>
    <div className="mt-4">
      <div className="pxp-single-company-side-info-label pxp-text-light">Company size</div>
      <div className="pxp-single-company-side-info-data">50-100</div>
    </div>
    <div className="mt-4">
      <div className="pxp-single-company-side-info-label pxp-text-light">Founded in</div>
      <div className="pxp-single-company-side-info-data">2005</div>
    </div>
    <div className="mt-4">
      <div className="pxp-single-company-side-info-label pxp-text-light">Phone</div>
      <div className="pxp-single-company-side-info-data">0124 456 789</div>
    </div>
    <div className="mt-4">
      <div className="pxp-single-company-side-info-label pxp-text-light">Email</div>
      <div className="pxp-single-company-side-info-data">office@craftgenics.com</div>
    </div>
    <div className="mt-4">
      <div className="pxp-single-company-side-info-label pxp-text-light">Location</div>
      <div className="pxp-single-company-side-info-data">Los Angeles, CA</div>
    </div>
    <div className="mt-4">
      <div className="pxp-single-company-side-info-label pxp-text-light">Website</div>
      <div className="pxp-single-company-side-info-data">Link here</div>
    </div>
    <div className="mt-4">
      <div className="pxp-single-company-side-info-data">
        <ul className="list-unstyled pxp-single-company-side-info-social">
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
  </>
);
export default CompanyDetailCard;
