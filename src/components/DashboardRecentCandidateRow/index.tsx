import React, { FC } from 'react';

import smallProfile from '../../theme/images/ph-small.jpg';

const DashboardRecentCandidateRow: FC = () => (
  <tr>
    <td style={{ width: '3%' }}>
      <div
        className="pxp-company-dashboard-candidate-avatar pxp-cover"
        style={{ backgroundImage: `url(${smallProfile})` }}
      />
    </td>
    <td style={{ width: '25%' }}>
      <div className="pxp-company-dashboard-candidate-name">Scott Goodwin</div>
    </td>
    <td style={{ width: '25%' }}>
      <div className="pxp-company-dashboard-candidate-title">UI Designer</div>
    </td>
    <td>
      <div className="pxp-company-dashboard-candidate-location">
        <span className="fa fa-globe" />
        London, UK
      </div>
    </td>
    <td>
      <div className="pxp-dashboard-table-options">
        <ul className="list-unstyled">
          <li>
            <button title="View profile" type="button">
              <span className="fa fa-eye" />
            </button>
          </li>
          <li>
            <button title="Send message" type="button">
              <span className="fa fa-envelope-o" />
            </button>
          </li>
          <li>
            <button title="Delete" type="button">
              <span className="fa fa-trash-o" />
            </button>
          </li>
        </ul>
      </div>
    </td>
  </tr>
);

export default DashboardRecentCandidateRow;
