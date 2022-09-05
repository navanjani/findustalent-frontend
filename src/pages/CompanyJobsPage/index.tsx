import React, { FC } from 'react';
import JobCompanyDetails from '../../components/JobCompanyDetails';
import JobsAvailable from '../../components/JobsAvailable';

const CompanyJobsPage: FC = () => (
  <section>
    <div className="pxp-container">
      <div className="pxp-single-company-container pxp-has-columns">
        <JobCompanyDetails />
      </div>
      <JobsAvailable />
    </div>
  </section>
);

export default CompanyJobsPage;
