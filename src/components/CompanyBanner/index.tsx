import React, { FC } from 'react';
import companyLogo from '../../theme/images/company-logo-2.png';
import companyBanner from '../../theme/images/ph-big.jpg';
import { ICompany } from '../../types/companies';

interface ICompanyBanner {
  company: ICompany;
}

const CompanyBanner: FC<ICompanyBanner> = ({ company }: ICompanyBanner) => (
  <div
    className="pxp-single-company-hero pxp-cover pxp-boxed"
    style={{ backgroundImage: `url(${companyBanner})` }}
  >
    <div className="pxp-hero-opacity" />
    <div className="pxp-single-company-hero-caption">
      <div className="pxp-container">
        <div className="pxp-single-company-hero-content">
          <div className="pxp-single-company-hero-logo" style={{ backgroundImage: `url(${companyLogo})` }} />
          <div className="pxp-single-company-hero-title">
            <h1>{company?.name}</h1>
            <div className="pxp-single-company-hero-location">
              <span className="fa fa-globe" />
              {company?.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default CompanyBanner;
