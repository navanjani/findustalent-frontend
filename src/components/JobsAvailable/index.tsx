import React, { FC } from 'react';
import JobMinimalCard from '../JobMinimalCard';
import { IJob } from '../../types/jobs';
import { ICompany } from '../../types/companies';
import { IEmploymentTypeMap } from '../../types/employmentTypes';

interface IJobsAvailable {
  company: ICompany;
  jobs: IJob[];
  employmentTypes: IEmploymentTypeMap | null;
}

const JobsAvailable: FC<IJobsAvailable> = ({ jobs, company, employmentTypes }: IJobsAvailable) => (
  <section className="mt-100">
    <div className="pxp-container">
      <h2 className="pxp-subsection-h2">Available Jobs</h2>
      <p className="pxp-text-light">Jobs list posted by {company?.name}</p>
    </div>
    <div className="row mt-3 mt-md-4 pxp-animate-in pxp-animate-in-top pxp-in">
      {jobs &&
        employmentTypes &&
        jobs.map((job) => (
          <JobMinimalCard
            key={job?.id}
            job={job}
            employmentType={employmentTypes[job?.employmentType]?.type}
            company={company}
          />
        ))}
    </div>
  </section>
);

export default JobsAvailable;
