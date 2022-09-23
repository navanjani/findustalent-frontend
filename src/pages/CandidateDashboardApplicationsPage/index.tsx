import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DashboardCandidate from '../../components/DashboardCandidate';
import { fetchCandidateJobs } from '../../store/candidate/thunks';
import { fetchCompanyDepartments } from '../../store/company/thunks';
import { useAppDispatch } from '../../store';
import { selectUser } from '../../store/user/selectors';
import { selectCandidateJobs } from '../../store/candidate/selectors';
import CandidateApplicationPageRaw from '../../components/CandidateApplicationPageRaw';
import { fetchApplicationStatuses, fetchEmploymentTypes } from '../../store/jobs/thunks';
import { IEmploymentTypeMap } from '../../types/employmentTypes';
import { selectApplicationStatusesAsObject, selectEmploymentTypesAsObject } from '../../store/jobs/selectors';
import { IApplicationStatusesMap } from '../../types/applicationStatuses';

const CandidateDashboardApplicationsPage: FC = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const candidateJobs = useSelector(selectCandidateJobs);
  const employmentTypes: IEmploymentTypeMap = useSelector(selectEmploymentTypesAsObject);
  const applicationStatuses: IApplicationStatusesMap = useSelector(selectApplicationStatusesAsObject);

  useEffect(() => {
    dispatch(fetchCandidateJobs());
    dispatch(fetchCompanyDepartments());
    dispatch(fetchEmploymentTypes());
    dispatch(fetchApplicationStatuses());
  }, [dispatch, user]);
  return (
    <DashboardCandidate>
      <h1>Applications</h1>
      <p className="pxp-text-light">Detailed list of your job applications.</p>

      <div className="mt-4 mt-lg-5">
        <div className="row justify-content-between align-content-center">
          <div className="col-auto order-2 order-sm-1">
            <div className="pxp-candidate-dashboard-jobs-bulk-actions mb-3">
              <select className="form-select">
                <option>Bulk actions</option>
                <option>Delete</option>
              </select>
              <button type="button" className="btn ms-2">
                Apply
              </button>
            </div>
          </div>
          <div className="col-auto order-1 order-sm-2">
            <div className="pxp-candidate-dashboard-jobs-search mb-3">
              <div className="pxp-candidate-dashboard-jobs-search-results me-3">Job applications</div>
              <div className="pxp-candidate-dashboard-jobs-search-search-form">
                <div className="input-group">
                  <span className="input-group-text">
                    <span className="fa fa-search" />
                  </span>
                  <input type="text" className="form-control" placeholder="Search jobs..." />
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
                <th style={{ width: '25%' }}>Job</th>
                <th style={{ width: '15%' }}>Company</th>
                <th style={{ width: '20%' }}>Status</th>
                <th style={{ width: '12%' }}>Type</th>
                <th>
                  Date
                  <span className="fa fa-angle-up ms-3" />
                </th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {candidateJobs &&
                candidateJobs.map((candidateJob) => (
                  <CandidateApplicationPageRaw
                    key={candidateJob.id}
                    candidateJob={candidateJob}
                    employmentTypes={employmentTypes}
                    applicationStatuses={applicationStatuses}
                  />
                ))}
            </tbody>
          </table>

          <div className="row mt-4 mt-lg-5 justify-content-between align-items-center">
            <div className="col-auto">
              <nav className="mt-3 mt-sm-0" aria-label="Applications list pagination">
                <ul className="pagination pxp-pagination">
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  {/*<li className="page-item">*/}
                  {/*  <button type="button" className="page-link">*/}
                  {/*    2*/}
                  {/*  </button>*/}
                  {/*</li>*/}
                  {/*<li className="page-item">*/}
                  {/*  <button type="button" className="page-link">*/}
                  {/*    3*/}
                  {/*  </button>*/}
                  {/*</li>*/}
                </ul>
              </nav>
            </div>
            <div className="col-auto">
              <button type="button" className="btn rounded-pill pxp-section-cta mt-3 mt-sm-0">
                Show more
                <span className="fa fa-angle-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardCandidate>
  );
};
export default CandidateDashboardApplicationsPage;
