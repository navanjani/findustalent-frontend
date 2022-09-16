import React, { FC } from 'react';
import { IJobCandidate } from '../../types/jobCandidates';
import DashboardRecentJobApplicationsRow from '../DashboardRecentJobApplicationsRow';

interface IDashboardRecentJobApplications {
  candidateJobs: IJobCandidate[];
}

const DashboardRecentJobApplications: FC<IDashboardRecentJobApplications> = ({
  candidateJobs,
}: IDashboardRecentJobApplications) => {
  console.log(candidateJobs);
  return (
    <div className="mt-4 mt-lg-5">
      <h2>Recent Job Applications</h2>
      <div className="table-responsive">
        <table className="table align-middle">
          <tbody>
            {candidateJobs.map((candidateJob) => (
              <DashboardRecentJobApplicationsRow key={candidateJob.id} candidateJob={candidateJob} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardRecentJobApplications;
