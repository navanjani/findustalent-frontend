import React, { FC } from 'react';

const SaveShare: FC = () => (
  <>
    <button type="button" className="btn pxp-single-job-save-btn">
      <span className="fa fa-heart-o" />
    </button>
    <div className="dropdown ms-2">
      <button
        className="btn pxp-single-job-share-btn dropdown-toggle"
        type="button"
        id="socialShareBtn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="fa fa-share-alt" />
      </button>
      <ul className="dropdown-menu pxp-single-job-share-dropdown" aria-labelledby="socialShareBtn">
        <li>
          <button type="button" className="dropdown-item">
            <span className="fa fa-facebook" /> Facebook
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item">
            <span className="fa fa-twitter" /> Twitter
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item">
            <span className="fa fa-pinterest" /> Pinterest
          </button>
        </li>
        <li>
          <button type="button" className="dropdown-item">
            <span className="fa fa-linkedin" /> LinkedIn
          </button>
        </li>
      </ul>
    </div>
  </>
);

export default SaveShare;
