import React, { FC } from 'react';

const HeroSearch: FC = () => (
  <div className="pxp-hero-form pxp-hero-form-round mt-3 mt-lg-4">
    <form className="row gx-3 align-items-center" action="jobs-list-1.html">
      <div className="col-12 col-sm">
        <div className="mb-3 mb-sm-0">
          <input type="text" className="form-control" placeholder="Job Title or Keyword" />
        </div>
      </div>
      <div className="col-12 col-sm pxp-has-left-border">
        <div className="mb-3 mb-sm-0">
          <input type="text" className="form-control" placeholder="Location" />
        </div>
      </div>
      <div className="col-12 col-sm-auto">
        <button type="submit">
          <span className="fa fa-search" />
        </button>
      </div>
    </form>
  </div>
);

export default HeroSearch;
