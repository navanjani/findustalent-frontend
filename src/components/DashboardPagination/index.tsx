import React, { FC } from 'react';

const DashboardPagination: FC = () => (
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
);
export default DashboardPagination;
