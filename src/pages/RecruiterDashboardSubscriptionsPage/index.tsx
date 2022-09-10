import React, { FC } from 'react';
import DashboardRecruiter from '../../components/DashboardRecruiter';

const RecruiterDashboardSubscriptionsPage: FC = () => (
  <DashboardRecruiter>
    <h1>Subscriptions</h1>
    <p className="pxp-text-light">History of all your subscriptions.</p>

    <div className="mt-4 mt-lg-5">
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Subscription plan</th>
              <th style={{ width: '25%' }}>Status</th>
              <th style={{ width: '25%' }}>
                Expiration date
                <span className="fa fa-angle-up ms-3" />
              </th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="pxp-company-dashboard-subscriptions-plan">Basic</div>
              </td>
              <td>
                <div className="pxp-company-dashboard-subscriptions-status">
                  <span className="badge rounded-pill bg-success">Active</span>
                </div>
              </td>
              <td>
                <div className="pxp-company-dashboard-job-date">2021/11/24</div>
              </td>
              <td>
                <div className="pxp-dashboard-table-options">
                  <ul className="list-unstyled">
                    <li>
                      <button type="button" title="Cancel subscription">
                        <span className="fa fa-ban" />
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="pxp-company-dashboard-subscriptions-plan">Standard</div>
              </td>
              <td>
                <div className="pxp-company-dashboard-subscriptions-status">
                  <span className="badge rounded-pill bg-danger">Expired</span>
                </div>
              </td>
              <td>
                <div className="pxp-company-dashboard-job-date">2021/09/01</div>
              </td>
              <td>
                <div className="pxp-company-dashboard-job-options">&nbsp;</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="pxp-company-dashboard-subscriptions-plan">Professional</div>
              </td>
              <td>
                <div className="pxp-company-dashboard-subscriptions-status">
                  <span className="badge rounded-pill bg-danger">Expired</span>
                </div>
              </td>
              <td>
                <div className="pxp-company-dashboard-job-date">2021/09/01</div>
              </td>
              <td>
                <div className="pxp-company-dashboard-job-options">&nbsp;</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="pxp-company-dashboard-subscriptions-plan">Extended</div>
              </td>
              <td>
                <div className="pxp-company-dashboard-subscriptions-status">
                  <span className="badge rounded-pill bg-danger">Expired</span>
                </div>
              </td>
              <td>
                <div className="pxp-company-dashboard-job-date">2021/09/01</div>
              </td>
              <td>
                <div className="pxp-company-dashboard-job-options">&nbsp;</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DashboardRecruiter>
);
export default RecruiterDashboardSubscriptionsPage;
