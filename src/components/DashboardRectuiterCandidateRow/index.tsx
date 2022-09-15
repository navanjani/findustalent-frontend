import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import candidateImage from '../../theme/images/ph-small.jpg';
import { IJobCandidate } from '../../types/jobCandidates';
// import { IApplicationStatuses, IApplicationStatusesMap } from '../../types/applicationStatuses';

interface IRecruiterDashboardCandidateRow {
  candidate: IJobCandidate;
  // applicationStatuses: IApplicationStatusesMap;
  // jobCandidateStatuses: IApplicationStatuses;
}
const RecruiterDashboardCandidateRow: FC<IRecruiterDashboardCandidateRow> = ({
  candidate,
}: // applicationStatuses,
// jobCandidateStatuses,
IRecruiterDashboardCandidateRow) => (
  <tr>
    <td>
      <input type="checkbox" className="form-check-input" />
    </td>
    <td style={{ width: '3%' }}>
      <div
        className="pxp-company-dashboard-candidate-avatar pxp-cover"
        style={{ backgroundImage: `url(${candidateImage})` }}
      />
    </td>
    <td>
      <Link to={`/dashboard/recruiter/jobs/${candidate.job?.id}/candidates/${candidate.id}`}>
        <div className="pxp-company-dashboard-job-title">
          {candidate.firstName} {candidate.lastName}
        </div>
        <div className="pxp-company-dashboard-job-location">
          <span className="fa fa-globe me-1" />
          {candidate.job?.location}
        </div>
      </Link>
    </td>
    <td>
      <div className="pxp-company-dashboard-job-category">{candidate.job?.title}</div>
    </td>
    <td>
      <div className="pxp-company-dashboard-job-status">
        <span className="badge rounded-pill bg-success">
          {/*{applicationStatuses && applicationStatuses?.status}*/}
        </span>
      </div>
    </td>
    <td>
      <div className="pxp-company-dashboard-job-date">2020/08/24 at 11:56 am</div>
    </td>
    <td>
      <div className="pxp-dashboard-table-options">
        <ul className="list-unstyled">
          <li>
            <Link to={`/dashboard/recruiter/jobs/${candidate.job?.id}/candidates/${candidate.id}`}>
              <button type="button" title="View profile">
                <span className="fa fa-eye" />
              </button>
            </Link>
          </li>
          <li>
            <button type="button" title="Send message">
              <span className="fa fa-envelope-o" />
            </button>
          </li>
        </ul>
      </div>
    </td>
  </tr>
);
export default RecruiterDashboardCandidateRow;
