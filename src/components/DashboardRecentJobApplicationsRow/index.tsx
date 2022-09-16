import React, { FC } from 'react';
import companyLogo from '../../theme/images/company-logo-2.png';
import { IJobCandidate } from '../../types/jobCandidates';

interface IDashboardRecentJobApplicationsRow {
  candidateJob: IJobCandidate;
}

const DashboardRecentJobApplicationsRow: FC<IDashboardRecentJobApplicationsRow> = ({
  candidateJob,
}: IDashboardRecentJobApplicationsRow) => (
  <tr key={candidateJob.id}>
    <td style={{ width: '3%' }}>
      <div
        className="pxp-candidate-dashboard-job-avatar pxp-cover"
        style={{ backgroundImage: `url(${companyLogo})` }}
      />
    </td>
    <td style={{ width: '25%' }}>
      <div className="pxp-candidate-dashboard-job-title">{candidateJob.job?.title}</div>
      <div className="pxp-candidate-dashboard-job-company">{candidateJob.job?.company?.name}</div>
    </td>
    <td style={{ width: '25%' }}>
      <div className="pxp-candidate-dashboard-job-category">{candidateJob.job?.departmentId}</div>
    </td>
    <td style={{ width: '25%' }}>
      <div className="pxp-candidate-dashboard-job-location">
        <span className="fa fa-globe" />
        {candidateJob.job?.location}
      </div>
    </td>
    <td style={{ width: '10%' }}>
      <div className="pxp-candidate-dashboard-job-type">{candidateJob.job?.employmentType}</div>
    </td>
    <td>
      <div className="pxp-dashboard-table-options">
        <ul className="list-unstyled">
          <li>
            <button type="button" title="View job details">
              <span className="fa fa-eye" />
            </button>
          </li>
        </ul>
      </div>
    </td>
  </tr>
);

export default DashboardRecentJobApplicationsRow;
