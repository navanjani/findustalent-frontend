import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import smallProfile from '../../theme/images/ph-small.jpg';
import { IJobCandidate } from '../../types/jobCandidates';

interface IDashboardRecentCandidateRow {
  candidate: IJobCandidate;
}

const DashboardRecentCandidateRow: FC<IDashboardRecentCandidateRow> = ({
  candidate,
}: IDashboardRecentCandidateRow) => (
  <tr>
    <td style={{ width: '3%' }}>
      <div
        className="pxp-company-dashboard-candidate-avatar pxp-cover"
        style={{ backgroundImage: `url(${smallProfile})` }}
      />
    </td>
    <td style={{ width: '25%' }}>
      <div className="pxp-company-dashboard-candidate-name">
        {candidate.firstName} {candidate.lastName}
      </div>
    </td>
    <td style={{ width: '25%' }}>
      <div className="pxp-company-dashboard-candidate-title">{candidate.job?.title}</div>
    </td>
    <td>
      <div className="pxp-company-dashboard-candidate-location">
        <span className="fa fa-globe" />
        {candidate.job?.location}
      </div>
    </td>
    <td>
      <div className="pxp-dashboard-table-options">
        <ul className="list-unstyled">
          <li>
            <Link to={`/dashboard/recruiter/jobs/${candidate.job?.id}/candidates/${candidate.id}`}>
              <button title="View profile" type="button">
                <span className="fa fa-eye" />
              </button>
            </Link>
          </li>
          <li>
            <button title="Send message" type="button" disabled>
              <span className="fa fa-envelope-o" />
            </button>
          </li>
          {/*<li>*/}
          {/*  <button title="Delete" type="button">*/}
          {/*    <span className="fa fa-trash-o" />*/}
          {/*  </button>*/}
          {/*</li>*/}
        </ul>
      </div>
    </td>
  </tr>
);

export default DashboardRecentCandidateRow;
