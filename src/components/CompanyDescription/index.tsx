import React, { FC } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { ICompany } from '../../types/companies';

interface ICompanyDescription {
  company: ICompany | null;
}

const CompanyDescription: FC<ICompanyDescription> = ({ company }: ICompanyDescription) => (
  <div className="pxp-single-company-content">
    <h2>About {company?.name}</h2>
    {/* https://stackoverflow.com/questions/38663751/how-to-safely-render-html-in-react */}
    {/* https://stackoverflow.com/a/60797348 */}
    {company?.description && (
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(company.description) }} />
    )}
  </div>
);
export default CompanyDescription;
