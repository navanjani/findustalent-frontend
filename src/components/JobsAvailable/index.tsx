import React, { FC } from 'react';
import JobMinimalCard from '../JobMinimalCard';

const JobsAvailable: FC = () => (
  <section className="mt-100">
    <div className="pxp-container">
      <h2 className="pxp-subsection-h2">Available Jobs</h2>
      <p className="pxp-text-light">Jobs list posted by Craftgenics</p>
    </div>
    <div className="row mt-3 mt-md-4 pxp-animate-in pxp-animate-in-top pxp-in">
      <JobMinimalCard />
      <JobMinimalCard />
      <JobMinimalCard />
      <JobMinimalCard />
    </div>
  </section>
);

export default JobsAvailable;
