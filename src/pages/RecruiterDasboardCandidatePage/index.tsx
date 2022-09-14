import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DashboardRecruiter from '../../components/DashboardRecruiter';

import { selectCompanyCandidates } from '../../store/company/selectors';
import RecruiterDashboardCandidateRow from '../../components/DashboardRectuiterCandidateRow';
import { useAppDispatch } from '../../store';
import { fetchCompanyCandidates } from '../../store/company/thunks';
import { selectUser } from '../../store/user/selectors';

const RecruiterCandidatePage: FC = () => {
  const dispatch = useAppDispatch();
  const candidates = useSelector(selectCompanyCandidates);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchCompanyCandidates());
  }, [dispatch, user]);

  return (
    <DashboardRecruiter>
      <h1>Candidates</h1>
      <p className="pxp-text-light">Detailed list of candidates that applied for your job offers.</p>

      <div className="mt-4 mt-lg-5">
        <div className="row justify-content-between align-content-center">
          <div className="col-auto order-2 order-sm-1">
            <div className="pxp-company-dashboard-jobs-bulk-actions mb-3">
              <select className="form-select">
                <option>Bulk actions</option>
                <option>Approve</option>
                <option>Reject</option>
                <option>Delete</option>
              </select>
              <button type="button" className="btn ms-2">
                Apply
              </button>
            </div>
          </div>
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
                candidates.map((candidate) => (
                  <RecruiterDashboardCandidateRow key={candidate.id} candidate={candidate} />
                ))}
            </tbody>
          </table>

          <div className="row mt-4 mt-lg-5 justify-content-between align-items-center">
            <div className="col-auto">
              <nav className="mt-3 mt-sm-0" aria-label="Candidates pagination">
                <ul className="pagination pxp-pagination">
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <button type="button" className="page-link">
                      2
                    </button>
                  </li>
                  <li className="page-item">
                    <button type="button" className="page-link">
                      3
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-auto">
              <button type="button" className="btn rounded-pill pxp-section-cta mt-3 mt-sm-0">
                Show me more
                <span className="fa fa-angle-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardRecruiter>
  );
};
export default RecruiterCandidatePage;
