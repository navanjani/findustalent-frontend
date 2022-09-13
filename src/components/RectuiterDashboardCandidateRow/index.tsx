import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import candidateImage from '../../theme/images/ph-small.jpg';
import { IJobCandidate } from '../../types/jobCandidates';

interface IRectuiterDashboardCandidateRow {
  candidate: IJobCandidate;
}
const RectuiterDashboardCandidateRow: FC<IRectuiterDashboardCandidateRow> = ({
  candidate,
}: IRectuiterDashboardCandidateRow) => (
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
      <Link to="/">
        <td>
          <div className="pxp-company-dashboard-job-title">
            {candidate.firstName} {candidate.lastName}
          </div>
          <div className="pxp-company-dashboard-job-location">
            <span className="fa fa-globe me-1" />
            {candidate.job?.location}
          </div>
        </td>
      </Link>
    </td>
    <td>
      <div className="pxp-company-dashboard-job-category">{candidate.job?.title}</div>
    </td>
    <td>
      <div className="pxp-company-dashboard-job-status">
        <span className="badge rounded-pill bg-success">Approved</span>
      </div>
    </td>
    <td>
      <div className="pxp-company-dashboard-job-date">2020/08/24 at 11:56 am</div>
    </td>
    <td>
      <div className="pxp-dashboard-table-options">
        <ul className="list-unstyled">
          <li>
            <button type="button" title="View profile">
              <span className="fa fa-eye" />
            </button>
          </li>
          <li>
            <button type="button" title="Send message">
              <span className="fa fa-envelope-o" />
            </button>
          </li>
          <li>
            <button type="button" title="Approve">
              <span className="fa fa-check" />
            </button>
          </li>
          <li>
            <button type="button" title="Reject">
              <span className="fa fa-ban" />
            </button>
          </li>
          <li>
            <button type="button" title="Delete">
              <span className="fa fa-trash-o" />
            </button>
          </li>
        </ul>
      </div>
    </td>
  </tr>
);
export default RectuiterDashboardCandidateRow;
