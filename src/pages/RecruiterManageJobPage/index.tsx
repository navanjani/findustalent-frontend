import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DashboardRecruiter from '../../components/DashboardRecruiter';

const RecruiterManageJobPage: FC = () => (
  <DashboardRecruiter>
    <h1>Manage Jobs</h1>
    <p className="pxp-text-light">Detailed list with all your job offers.</p>
    <div className="mt-4 mt-lg-5">
      <div className="row justify-content-between align-content-center">
        <div className="col-auto order-2 order-sm-1">
          <div className="pxp-company-dashboard-jobs-bulk-actions mb-3">
            <select className="form-select">
              <option>Bulk actions</option>
              <option>Edit</option>
              <option>Delete</option>
            </select>
            <button type="button" className="btn ms-2">
              Apply
            </button>
          </div>
        </div>
        <div className="col-auto order-1 order-sm-2">
          <div className="pxp-company-dashboard-jobs-search mb-3">
            <div className="pxp-company-dashboard-jobs-search-results me-3">16 jobs</div>
            <div className="pxp-company-dashboard-jobs-search-search-form">
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
              <th style={{ width: '20%' }}>Category</th>
              <th style={{ width: '12%' }}>Type</th>
              <th style={{ width: '15%' }}>Applications</th>
              <th>
                Date
                <span className="fa fa-angle-up ms-3" />
              </th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>
                <Link to="/">
                  <div className="pxp-company-dashboard-job-title">Software developer</div>
                  <div className="pxp-company-dashboard-job-location">
                    <span className="fa fa-globe me-1" />
                    San Francisco, CA
                  </div>
                </Link>
              </td>
              <td>
                <div className="pxp-company-dashboard-job-category">Software Engineering</div>
              </td>
              <td>
                <div className="pxp-company-dashboard-job-type">Full-time</div>
              </td>
              <td>
                <button type="button" className="pxp-company-dashboard-job-applications">
                  3 Candidates
                </button>
              </td>
              <td>
                <div className="pxp-company-dashboard-job-status">
                  <span className="badge rounded-pill bg-success">Published</span>
                </div>
                <div className="pxp-company-dashboard-job-date mt-1">2020/08/24 at 11:56 am</div>
              </td>
              <td>
                <div className="pxp-dashboard-table-options">
                  <ul className="list-unstyled">
                    <li>
                      <button type="button" title="Edit">
                        <span className="fa fa-pencil" />
                      </button>
                    </li>
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
          </tbody>
        </table>

        <div className="row mt-4 mt-lg-5 justify-content-between align-items-center">
          <div className="col-auto">
            <nav className="mt-3 mt-sm-0" aria-label="Jobs list pagination">
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
            <NavLink to="/">
              <button type="button" className="btn rounded-pill pxp-section-cta mt-3 mt-sm-0">
                Show me more
                <span className="fa fa-angle-right" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </DashboardRecruiter>
);

export default RecruiterManageJobPage;
