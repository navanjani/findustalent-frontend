import React, { FC } from 'react';
import DashboardCandidate from '../../components/DashboardCandidate';

const CandidateDashboardPage: FC = () => (
  <DashboardCandidate>
    <h1>Dashboard</h1>
    <p className="pxp-text-light">Welcome to Jobster!</p>

    <div className="row mt-4 mt-lg-5 align-items-center">
      <div className="col-sm-6 col-xxl-3">
        <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
          <div className="pxp-dashboard-stats-card-icon text-primary">
            <span className="fa fa-file-text-o" />
          </div>
          <div className="pxp-dashboard-stats-card-info">
            <div className="pxp-dashboard-stats-card-info-number">13</div>
            <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Job applications</div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xxl-3">
        <div className="pxp-dashboard-stats-card bg-success bg-opacity-10 mb-3 mb-xxl-0">
          <div className="pxp-dashboard-stats-card-icon text-success">
            <span className="fa fa-user-circle-o" />
          </div>
          <div className="pxp-dashboard-stats-card-info">
            <div className="pxp-dashboard-stats-card-info-number">312</div>
            <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Profile visits</div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xxl-3">
        <div className="pxp-dashboard-stats-card bg-warning bg-opacity-10 mb-3 mb-xxl-0">
          <div className="pxp-dashboard-stats-card-icon text-warning">
            <span className="fa fa-envelope-o" />
          </div>
          <div className="pxp-dashboard-stats-card-info">
            <div className="pxp-dashboard-stats-card-info-number">14</div>
            <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Unread messages</div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xxl-3">
        <div className="pxp-dashboard-stats-card bg-danger bg-opacity-10 mb-3 mb-xxl-0">
          <div className="pxp-dashboard-stats-card-icon text-danger">
            <span className="fa fa-bell-o" />
          </div>
          <div className="pxp-dashboard-stats-card-info">
            <div className="pxp-dashboard-stats-card-info-number">5</div>
            <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Notifications</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-4 mt-lg-5">
      <h2>Recent Job Apllications</h2>
      <div className="table-responsive">
        <table className="table align-middle">
          <tr>
            <td style={{ width: '3%' }}>
              <div
                className="pxp-candidate-dashboard-job-avatar pxp-cover"
                style={{ backgroundImage: 'url(images/company-logo-1.png)' }}
              />
            </td>
            <td style={{ width: '25%' }}>
              <div className="pxp-candidate-dashboard-job-title">Senior Editor</div>
              <div className="pxp-candidate-dashboard-job-company">Artistre Studio</div>
            </td>
            <td style={{ width: '25%' }}>
              <div className="pxp-candidate-dashboard-job-category">Marketing & Communication</div>
            </td>
            <td style={{ width: '25%' }}>
              <div className="pxp-candidate-dashboard-job-location">
                <span className="fa fa-globe" />
                London, UK
              </div>
            </td>
            <td style={{ width: '10%' }}>
              <div className="pxp-candidate-dashboard-job-type">Full-time</div>
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
        </table>
      </div>
    </div>
  </DashboardCandidate>
);

export default CandidateDashboardPage;
