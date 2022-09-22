import React, { FC } from 'react';
import companyLogo from '../../theme/images/company-logo-2.png';
import { IJobCandidate } from '../../types/jobCandidates';
import { getLatestJobStatusForApplication } from '../../helpers/jobStatus';
import { IEmploymentTypeMap } from '../../types/employmentTypes';
import { IApplicationStatusesMap } from '../../types/applicationStatuses';
import BadgePillSuccess from '../BadgePillSuccess';

interface IDashboardRecentJobApplicationsRow {
  candidateJob: IJobCandidate;
  employmentTypes: IEmploymentTypeMap;
  applicationStatuses: IApplicationStatusesMap;
}

const DashboardRecentJobApplicationsRow: FC<IDashboardRecentJobApplicationsRow> = ({
  candidateJob,
  employmentTypes,
  applicationStatuses,
}: IDashboardRecentJobApplicationsRow) => {
  const latestStatus = candidateJob.jobCandidateStatuses
    ? getLatestJobStatusForApplication(candidateJob.jobCandidateStatuses)
    : null;

  return (
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
        {applicationStatuses && latestStatus && (
          <div className="pxp-candidate-dashboard-job-category">
            <BadgePillSuccess label={applicationStatuses[latestStatus?.status].status} />
          </div>
        )}
      </td>
      <td style={{ width: '25%' }}>
        <div className="pxp-candidate-dashboard-job-location">
          <span className="fa fa-globe" />
          {candidateJob.job?.location}
        </div>
      </td>
      <td style={{ width: '10%' }}>
        <div className="pxp-candidate-dashboard-job-type">
          {employmentTypes &&
            candidateJob.job?.employmentType &&
            employmentTypes[candidateJob.job?.employmentType]?.type}
        </div>
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
};
export default DashboardRecentJobApplicationsRow;
