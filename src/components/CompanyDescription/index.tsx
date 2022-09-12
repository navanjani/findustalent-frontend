import React, { FC } from 'react';
import { ICompany } from '../../types/companies';

interface ICompanyDescription {
  company: ICompany | null;
}

const CompanyDescription: FC<ICompanyDescription> = ({ company }: ICompanyDescription) => (
  <div className="pxp-single-company-content">
    <h2>About Company</h2>
    <p>{company?.name}</p>
    <p>TODO</p>
  </div>
);
export default CompanyDescription;
