import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import DashboardRecruiter from '../../components/DashboardRecruiter';
import SubscriptionPageRow from '../../components/SubscriptionPageRow';

import { selectUserCompany } from '../../store/company/selectors';

const RecruiterDashboardSubscriptionsPage: FC = () => {
  const company = useSelector(selectUserCompany);
  return (
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
            <tbody>{company && <SubscriptionPageRow company={company} />}</tbody>
          </table>
        </div>
      </div>
    </DashboardRecruiter>
  );
};
export default RecruiterDashboardSubscriptionsPage;
