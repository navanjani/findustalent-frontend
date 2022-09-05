import React, { FC } from 'react';
import JobsAvailable from '../../components/JobsAvailable';
import CompanyBanner from '../../components/CompanyBanner';
import CompanyDetailCard from '../../components/CompanyDetailCard';

const CompanyJobsPage: FC = () => (
  <section>
    <div className="pxp-container">
      <div className="pxp-single-company-container pxp-has-columns">
        <div className="row">
          <div className="col-lg-7 col-xl-8 col-xxl-9">
            <CompanyBanner />
          </div>
          <div className="col-lg-5 col-xl-4 col-xxl-3">
            <CompanyDetailCard />
          </div>
        </div>
      </div>
      <JobsAvailable />
    </div>
  </section>
);

export default CompanyJobsPage;
