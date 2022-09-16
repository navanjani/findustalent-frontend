import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DashboardRecruiter from '../../components/DashboardRecruiter';
import { selectCompanyCandidates } from '../../store/company/selectors';
import RecruiterDashboardCandidateRow from '../../components/DashboardRectuiterCandidateRow';
import { useAppDispatch } from '../../store';
import { fetchCompanyCandidates } from '../../store/company/thunks';
import { selectUser } from '../../store/user/selectors';
import DashboardPagination from '../../components/DashboardPagination';
import { fetchApplicationStatuses } from '../../store/jobs/thunks';
import { selectApplicationStatusesAsObject } from '../../store/jobs/selectors';
import { IApplicationStatusesMap } from '../../types/applicationStatuses';

const RecruiterCandidatePage: FC = () => {
  const dispatch = useAppDispatch();
  const candidates = useSelector(selectCompanyCandidates);
  const applicationStatuses: IApplicationStatusesMap = useSelector(selectApplicationStatusesAsObject);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchCompanyCandidates());
    dispatch(fetchApplicationStatuses());
  }, [dispatch, user]);

  return (
    <DashboardRecruiter>
      <h1>Candidates</h1>
      <p className="pxp-text-light">Detailed list of candidates that applied for your job offers.</p>

      <div className="mt-4 mt-lg-5">
        <div className="row justify-content-between align-content-center">
          <div className="col-auto order-1 order-sm-2">
            <div className="pxp-company-dashboard-jobs-search mb-3">
              <div className="pxp-company-dashboard-jobs-search-results me-3">
                {candidates.length} candidates
              </div>
              <div className="pxp-company-dashboard-jobs-search-search-form">
                <div className="input-group">
                  <span className="input-group-text">
                    <span className="fa fa-search" />
                  </span>
                  <input type="text" className="form-control" placeholder="Search candidates..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th className="pxp-is-checkbox" style={{ width: '1%' }}>
                  <input type="checkbox" className="form-check-input" />
                </th>
                <th style={{ width: '25%' }} colSpan={2}>
                  Name
                </th>
                <th style={{ width: '20%' }}>Applied for</th>
                <th style={{ width: '15%' }}>Status</th>
                <th>
                  Date
                  <span className="fa fa-angle-up ms-3" />
                </th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {candidates &&
                applicationStatuses &&
                candidates.map((candidate) => (
                  <RecruiterDashboardCandidateRow
                    key={candidate.id}
                    candidate={candidate}
                    applicationStatuses={applicationStatuses}
                  />
                ))}
            </tbody>
          </table>
          <DashboardPagination />
        </div>
      </div>
    </DashboardRecruiter>
  );
};
export default RecruiterCandidatePage;
