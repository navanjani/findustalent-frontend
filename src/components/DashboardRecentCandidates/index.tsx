import React, { FC } from 'react';
import DashboardRecentCandidateRow from '../DashboardRecentCandidateRow';

const DashboardRecentCandidates: FC = () => (
  <div className="mt-4 mt-lg-5">
    <h2>Recent Candidates</h2>
    <div className="table-responsive">
      <table className="table align-middle">
        <tbody>
          <DashboardRecentCandidateRow />
          <DashboardRecentCandidateRow />
          <DashboardRecentCandidateRow />
          <DashboardRecentCandidateRow />
        </tbody>
      </table>
    </div>
  </div>
);

export default DashboardRecentCandidates;
