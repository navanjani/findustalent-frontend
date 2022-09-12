import React, { FC, useEffect } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import JobsAvailable from '../../components/JobsAvailable';
import CompanyBanner from '../../components/CompanyBanner';
import CompanyDetailCard from '../../components/CompanyDetailCard';
import CompanyDescription from '../../components/CompanyDescription';
import PublicPage from '../../components/PublicPage';
import { fetchCompanyPublicData, fetchCompanyPublicJobs } from '../../store/public/thunks';
import { selectPublicCompany, selectPublicJobs } from '../../store/public/selectors';
import { fetchEmploymentTypes } from '../../store/jobs/thunks';
import { selectEmploymentTypesAsObject } from '../../store/jobs/selectors';
import { IEmploymentTypeMap } from '../../types/employmentTypes';

const CompanyJobsPage: FC = () => {
  // https://github.com/remix-run/react-router/issues/8200#issuecomment-1034662744
  interface QueryParamTypes extends Params {
    companySlug: string;
  }
  const { companySlug } = useParams() as QueryParamTypes;
  const dispatch = useAppDispatch();
  const company = useSelector(selectPublicCompany);
  const jobs = useSelector(selectPublicJobs);
  const employmentTypes: IEmploymentTypeMap = useSelector(selectEmploymentTypesAsObject);

  useEffect(() => {
    dispatch(fetchCompanyPublicData(companySlug));
    dispatch(fetchCompanyPublicJobs(companySlug));
    dispatch(fetchEmploymentTypes());
  }, [companySlug]);

  return (
    <PublicPage>
      <section>
        <div className="pxp-container">
          <div className="pxp-single-company-container pxp-has-columns">
            <div className="row">
              <div className="col-lg-7 col-xl-8 col-xxl-9">
                {company && <CompanyBanner company={company} />}
                <section className="mt-4 mt-lg-5">
                  {company && <CompanyDescription company={company} />}
                </section>
              </div>
              <div className="col-lg-5 col-xl-4 col-xxl-3">
                <CompanyDetailCard />
              </div>
            </div>
          </div>
          {company && jobs && employmentTypes && (
            <JobsAvailable company={company} jobs={jobs} employmentTypes={employmentTypes} />
          )}
        </div>
      </section>
    </PublicPage>
  );
};

export default CompanyJobsPage;
