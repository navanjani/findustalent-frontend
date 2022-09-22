import React, { FC } from 'react';
import { ICompany } from '../../types/companies';

interface ICompanyDescription {
  company: ICompany | null;
}

const CompanyDescription: FC<ICompanyDescription> = ({ company }: ICompanyDescription) => (
  <div className="pxp-single-company-content">
    <h2>About Company</h2>
    <p>{company?.name}</p>
    <p>
      Founded in Amsterdam in 2013, we now work with most prominent investors, entrepreneurs and government
      organizations to provide transparency, analysis and insights on venture capital activity. Our mission is
      to accelerate entrepreneurship & innovation through data for governments, corporates and VCs, founders.
    </p>
  </div>
);
export default CompanyDescription;
