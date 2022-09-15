import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ICompany } from '../../types/companies';
import { useAppDispatch } from '../../store';

import { selectIndustriesAsObject } from '../../store/company/selectors';
import { IIndustryMap } from '../../types/industries';
import { fetchIndustries } from '../../store/company/thunks';

interface ICompanyDetailCard {
  company: ICompany;
}
const CompanyDetailCard: FC<ICompanyDetailCard> = ({ company }: ICompanyDetailCard) => {
  const dispatch = useAppDispatch();
  const industries: IIndustryMap = useSelector(selectIndustriesAsObject);
  useEffect(() => {
    dispatch(fetchIndustries());
  }, [dispatch]);

  return (
    <>
      <div className="mt-4">
        <div className="pxp-single-company-side-info-label pxp-text-light">Industry</div>
        <div className="pxp-single-company-side-info-data">
          {industries && industries[company.industry]?.industry}
        </div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-company-side-info-label pxp-text-light">Company size</div>
        <div className="pxp-single-company-side-info-data">50-100</div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-company-side-info-label pxp-text-light">Founded in</div>
        <div className="pxp-single-company-side-info-data">2005</div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-company-side-info-label pxp-text-light">Phone</div>
        <div className="pxp-single-company-side-info-data">0124 456 789</div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-company-side-info-label pxp-text-light">Email</div>
        <div className="pxp-single-company-side-info-data">{company.domain}</div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-company-side-info-label pxp-text-light">Location</div>
        <div className="pxp-single-company-side-info-data">{company.location}</div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-company-side-info-label pxp-text-light">Website</div>
        <div className="pxp-single-company-side-info-data">
          {' '}
          <span>
            <a rel="noreferrer" target="_blank" href={`https://${company?.domain}`}>
              {company?.domain}
            </a>
          </span>
        </div>
      </div>
      <div className="mt-4">
        <div className="pxp-single-company-side-info-data">
          <ul className="list-unstyled pxp-single-company-side-info-social">
            <li>
              <NavLink to="/">
                <span className="fa fa-facebook" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <span className="fa fa-twitter" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <span className="fa fa-instagram" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <span className="fa fa-linkedin" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default CompanyDetailCard;
