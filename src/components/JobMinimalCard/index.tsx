import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import companyLogo from '../../theme/images/company-logo-2.png';
import { IJob } from '../../types/jobs';
import { ICompany } from '../../types/companies';

interface IJobMinimalCard {
  job: IJob;
  company: ICompany;
  employmentType: string;
}

const JobMinimalCard: FC<IJobMinimalCard> = ({ job, employmentType, company }: IJobMinimalCard) => (
  <div className="col-xl-6 pxp-jobs-card-2-container">
    <div className="pxp-jobs-card-2 pxp-has-border">
      <div className="pxp-jobs-card-2-top">
        <NavLink to={`/c/${company.slug}`}>
          <span className="pxp-jobs-card-2-company-logo" style={{ backgroundImage: `url(${companyLogo})` }} />
        </NavLink>
        <div className="pxp-jobs-card-2-info">
          <NavLink to={`/c/${company.slug}/${job.slug}`}>
            <span className="pxp-jobs-card-2-title">{job.title}</span>
          </NavLink>
          <div className="pxp-jobs-card-2-details">
            <span className="pxp-jobs-card-2-location">
              <span className="fa fa-globe"> </span>
              {job.location}
            </span>
            <div className="pxp-jobs-card-2-type">{employmentType}</div>
          </div>
        </div>
      </div>
      <div className="pxp-jobs-card-2-bottom">
        <span className="pxp-jobs-card-2-category">
          <div className="pxp-jobs-card-2-category-label">Category: {job.category?.name}</div>
        </span>
        <div className="pxp-jobs-card-2-bottom-right">
          <span className="pxp-jobs-card-2-date pxp-text-light">{moment(job?.createdAt).fromNow()} by </span>

          <NavLink to={`/c/${company.slug}`} className="pxp-jobs-card-2-company">
            {company.name}
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);
export default JobMinimalCard;
