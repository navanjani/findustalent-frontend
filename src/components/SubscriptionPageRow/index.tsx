import React, { FC } from 'react';
import moment from 'moment';
import { ICompany } from '../../types/companies';

interface ISubscriptionPageRow {
  company: ICompany;
}
const SubscriptionPageRow: FC<ISubscriptionPageRow> = ({ company }: ISubscriptionPageRow) => (
  <tr>
    <td>
      <div className="pxp-company-dashboard-subscriptions-plan">Basic</div>
    </td>
    <td>
      <div className="pxp-company-dashboard-subscriptions-status">
        <span className="badge rounded-pill bg-success">Free</span>
      </div>
    </td>
    <td>
      <div className="pxp-company-dashboard-job-date">
        {moment(company.subscriptionValidTill).format('YYYY- MM-DD')}
      </div>
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
);
export default SubscriptionPageRow;
