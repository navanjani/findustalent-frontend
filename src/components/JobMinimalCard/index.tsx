import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from '../../theme/images/company-logo-2.png';

const JobMinimalCard: FC = () => (
  <div className="col-xl-6 pxp-jobs-card-2-container">
    <div className="pxp-jobs-card-2 pxp-has-border">
      <div className="pxp-jobs-card-2-top">
        <NavLink to="/">
          <span className="pxp-jobs-card-2-company-logo" style={{ backgroundImage: `url(${companyLogo})` }} />
        </NavLink>
        <div className="pxp-jobs-card-2-info">
          <NavLink to="/">
            <span className="pxp-jobs-card-2-title">Job Title</span>
          </NavLink>
          <div className="pxp-jobs-card-2-details">
            <a href="jobs-list-1.html" className="pxp-jobs-card-2-location">
              <span className="fa fa-globe"> </span>
              Location
            </a>
            <div className="pxp-jobs-card-2-type">Full-time</div>
          </div>
        </div>
      </div>
      <div className="pxp-jobs-card-2-bottom">
        <a href="jobs-list-1.html" className="pxp-jobs-card-2-category">
          <div className="pxp-jobs-card-2-category-label">Category</div>
        </a>
        <div className="pxp-jobs-card-2-bottom-right">
          <span className="pxp-jobs-card-2-date pxp-text-light">Duration</span>
          <a href="single-company-1.html" className="pxp-jobs-card-2-company">
            Company
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default JobMinimalCard;
