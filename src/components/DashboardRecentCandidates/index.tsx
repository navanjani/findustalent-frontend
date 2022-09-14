import React, { FC } from 'react';
import DashboardRecentCandidateRow from '../DashboardRecentCandidateRow';
import { IJobCandidate } from '../../types/jobCandidates';

interface IDashboardRecentCandidates {
  candidates: IJobCandidate[];
}
const DashboardRecentCandidates: FC<IDashboardRecentCandidates> = ({
  candidates,
}: IDashboardRecentCandidates) => (
  <div className="mt-4 mt-lg-5">
    <h2>Recent Candidates</h2>
    <div className="table-responsive">
      <table className="table align-middle">
        <tbody>
          {candidates.length > 0 &&
            candidates.map((candidate) => (
              <DashboardRecentCandidateRow key={candidate.id} candidate={candidate} />
            ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DashboardRecentCandidates;
