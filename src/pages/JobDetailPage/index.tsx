import React, { FC, useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PublicPage from '../../components/PublicPage';
import ApplyForJobForm from '../../components/ApplyForJobForm';
import { useAppDispatch } from '../../store';
import { fetchCompanyPublicData, fetchJobBySlugs } from '../../store/public/thunks';
import { selectPublicCompany, selectPublicCurrentJob } from '../../store/public/selectors';

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

  useEffect(() => {
    dispatch(fetchCompanyPublicData(companySlug));
    dispatch(fetchJobBySlugs(companySlug, jobSlug));
  }, [companySlug, jobSlug]);

  return (
    <PublicPage>
      <section>
        <div className="pxp-container">
          <div className="pxp-single-job-content pxp-has-columns">
            <div className="row">
              <div className="col-lg-7 col-xl-8 col-xxl-9">
                <div
                  className="pxp-single-job-cover pxp-cover"
                  style={{ backgroundImage: 'url(images/ph-big.jpg)' }}
                />
                <div
                  className="pxp-single-job-cover-logo"
                  style={{ backgroundImage: 'url(images/company-logo-2.png)' }}
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
                        <ul
                          className="dropdown-menu pxp-single-job-share-dropdown"
                          aria-labelledby="socialShareBtn"
                        >
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

                      <button
                        type="button"
                        className="btn ms-2 pxp-single-job-apply-btn rounded-pill"
                        onClick={() => setShowApplyForm(true)}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pxp-single-job-content-details mt-4 mt-lg-5">
                  {job?.description}
                  <div className="mt-4 mt-lg-5">
                    <button
                      type="button"
                      className="btn rounded-pill pxp-section-cta"
                      onClick={() => setShowApplyForm(true)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4 col-xxl-3">
                <div className="pxp-single-job-side-panel mt-5 mt-lg-0">
                  <div>
                    <div className="pxp-single-job-side-info-label pxp-text-light">Experience</div>
                    <div className="pxp-single-job-side-info-data">Minimum 1 year</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Work Level</div>
                    <div className="pxp-single-job-side-info-data">Senior Level</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Employment Type</div>
                    <div className="pxp-single-job-side-info-data">Full Time</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Salary</div>
                    <div className="pxp-single-job-side-info-data">$35k / year</div>
                  </div>
                </div>
                <div className="mt-3 mt-lg-4 pxp-single-job-side-panel">
                  <div className="pxp-single-job-side-company" />
                  <div
                    className="pxp-single-job-side-company-logo pxp-cover"
                    style={{ backgroundImage: 'url(images/company-logo-2.png)' }}
                  />
                  <div className="pxp-single-job-side-company-profile">
                    <div className="pxp-single-job-side-company-name">Craftgenics</div>
                    <a href="single-company-1.html">View profile</a>
                  </div>

                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Industry</div>
                    <div className="pxp-single-job-side-info-data">Software</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Company size</div>
                    <div className="pxp-single-job-side-info-data">50-100</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Founded in</div>
                    <div className="pxp-single-job-side-info-data">2005</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Phone</div>
                    <div className="pxp-single-job-side-info-data">0124 456 789</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Email</div>
                    <div className="pxp-single-job-side-info-data">office@craftgenics.com</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Location</div>
                    <div className="pxp-single-job-side-info-data">Los Angeles, CA</div>
                  </div>
                  <div className="mt-4">
                    <div className="pxp-single-job-side-info-label pxp-text-light">Website</div>
                    <div className="pxp-single-job-side-info-data">
                      <span>www.craftgenics.com</span>
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
        <div>{showApplyForm && <ApplyForJobForm />}</div>
      </section>
    </PublicPage>
  );
};

export default JobDetailPage;
