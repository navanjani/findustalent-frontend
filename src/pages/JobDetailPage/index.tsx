import React, { FC, useEffect, useState } from 'react';
import { Link, Params, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DOMPurify from 'isomorphic-dompurify';
import PublicPage from '../../components/PublicPage';
import ApplyForJobForm from '../../components/ApplyForJobForm';
import { useAppDispatch } from '../../store';
import { fetchCompanyPublicData, fetchJobBySlugs } from '../../store/public/thunks';
import { selectPublicCompany, selectPublicCurrentJob } from '../../store/public/selectors';
import companyLogo from '../../theme/images/company-logo-2.png';
import jobBanner from '../../theme/images/ph-big.jpg';
import JobHighlightCard from '../../components/JobHighlightCard';
import { selectToken, selectUser } from '../../store/user/selectors';
import { getUserWithStoredToken } from '../../store/user/thunks';

const JobDetailPage: FC = () => {
  interface QueryParamTypes extends Params {
    companySlug: string;
    jobSlug: string;
  }
  const { companySlug, jobSlug } = useParams() as QueryParamTypes;
  const dispatch = useAppDispatch();
  const job = useSelector(selectPublicCurrentJob);
  const company = useSelector(selectPublicCompany);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(fetchCompanyPublicData(companySlug));
    dispatch(fetchJobBySlugs(companySlug, jobSlug));
  }, [companySlug, jobSlug]);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [token]);

  return (
    <PublicPage hasMargin>
      <section>
        <div className="pxp-container">
          <div className="pxp-single-job-content pxp-has-columns">
            <div className="row">
              <div className="col-lg-7 col-xl-8 col-xxl-9">
                <div
                  className="pxp-single-job-cover pxp-cover"
                  style={{ backgroundImage: `url(${jobBanner})` }}
                />
                <div
                  className="pxp-single-job-cover-logo"
                  style={{ backgroundImage: `url(${companyLogo})` }}
                />
                <div className="row justify-content-between align-items-center mt-4 mt-lg-5">
                  <div className="col-xl-8 col-xxl-6">
                    <h1>{job?.title}</h1>
                    <div className="pxp-single-job-company-location">
                      by <span className="pxp-single-job-company">{company?.name}</span> in{' '}
                      <span className="pxp-single-job-location">{job?.location}</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="pxp-single-job-options mt-4 col-xl-0">
                      {user?.userType !== 2 && (
                        <button
                          type="button"
                          disabled={showApplyForm}
                          className="btn ms-2 pxp-single-job-apply-btn rounded-pill"
                          style={{ backgroundColor: company?.primaryColor, color: company?.textColor }}
                          onClick={() => setShowApplyForm(true)}
                        >
                          Apply Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center mt-4 mt-lg-5" />
                <div className="pxp-single-job-content-details mt-4 mt-lg-5">
                  {/* https://stackoverflow.com/questions/38663751/how-to-safely-render-html-in-react */}
                  {/* https://stackoverflow.com/a/60797348 */}
                  {job?.description && (
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.description) }} />
                  )}
                  <div className="mt-4 mt-lg-5">
                    {user?.userType !== 2 && (
                      <button
                        type="button"
                        disabled={showApplyForm}
                        className="btn rounded-pill pxp-section-cta"
                        style={{ backgroundColor: company?.primaryColor, color: company?.textColor }}
                        onClick={() => {
                          setShowApplyForm(true);
                        }}
                      >
                        Apply Now
                      </button>
                    )}
                  </div>
                </div>
                <div>{showApplyForm && <ApplyForJobForm companySlug={companySlug} jobSlug={jobSlug} />}</div>
              </div>
              <div className="col-lg-5 col-xl-4 col-xxl-3">
                {job && (
                  <div
                    className="pxp-single-job-side-panel mt-5 mt-lg-0"
                    style={{ backgroundColor: company?.primaryColor, color: company?.textColor }}
                  >
                    <JobHighlightCard job={job} />
                  </div>
                )}
                <div
                  className="mt-3 mt-lg-4 pxp-single-job-side-panel"
                  style={{ backgroundColor: company?.primaryColor, color: company?.textColor }}
                >
                  <div className="pxp-single-job-side-company">
                    <div
                      className="pxp-single-job-side-company-logo pxp-cover"
                      style={{ backgroundImage: `url(${companyLogo})` }}
                    />
                    <div className="pxp-single-job-side-company-profile">
                      <div className="pxp-single-job-side-company-name">{company?.name}</div>
                      <Link to={`/c/${company?.slug}`} style={{ color: company?.textColor }}>
                        <span>View profile</span>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Industry</div>
                    <div className="pxp-single-job-side-info-data">Software</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Founded in</div>
                    <div className="pxp-single-job-side-info-data">2005</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Location</div>
                    <div className="pxp-single-job-side-info-data">{job?.location}</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Website</div>
                    <div className="pxp-single-job-side-info-data">
                      <span>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={`https://${company?.domain}`}
                          style={{ color: company?.textColor }}
                        >
                          {company?.domain}
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-data">
                      <ul className="list-unstyled pxp-single-job-side-info-social">
                        <li>
                          <span className="fa fa-facebook" />
                        </li>
                        <li>
                          <span className="fa fa-twitter" />
                        </li>
                        <li>
                          <span className="fa fa-instagram" />
                        </li>
                        <li>
                          <span className="fa fa-linkedin" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicPage>
  );
};

export default JobDetailPage;
