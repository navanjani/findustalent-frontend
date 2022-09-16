import React, { FC } from 'react';
import moment from 'moment';
import { IJobCandidate } from '../../types/jobCandidates';

interface ICandidateApplicationPageRaw {
  candidateJob: IJobCandidate;
}
const CandidateApplicationPageRaw: FC<ICandidateApplicationPageRaw> = ({
  candidateJob,
}: ICandidateApplicationPageRaw) => (
  <tr>
    <td>
      <input type="checkbox" className="form-check-input" />
    </td>
    <td>
      <span>
        <div className="pxp-candidate-dashboard-job-title">{candidateJob.job?.title}</div>
        <div className="pxp-candidate-dashboard-job-location">
          <span className="fa fa-globe me-1" />
          {candidateJob.job?.location}
        </div>
      </span>
    </td>
    <td>
      <span className="pxp-candidate-dashboard-job-company">{candidateJob.job?.company?.name}</span>
    </td>
    <td>
      <div className="pxp-candidate-dashboard-job-category">test</div>
    </td>
    <td>
      <div className="pxp-candidate-dashboard-job-type">Fulltime</div>
    </td>
    <td>
      <div className="pxp-candidate-dashboard-job-date mt-1">
        {moment(candidateJob.createdAt).format('MMMM Do YYYY')}
      </div>
    </td>
    <td>
      <div className="pxp-dashboard-table-options">
        <ul className="list-unstyled">
          <li>
            <button type="button" title="Preview">
              <span className="fa fa-eye" />
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
export default CandidateApplicationPageRaw;
