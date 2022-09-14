import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PublicPage from '../../components/PublicPage';
import registerCompanyImage from '../../theme/images/service-2-icon.png';
import FormInput from '../../components/FormInput';
import { selectToken, selectUser } from '../../store/user/selectors';
import { selectIndustries, selectUserCompany } from '../../store/company/selectors';
import FormSelect from '../../components/FormSelect';
import { useAppDispatch } from '../../store';
import { createCompany, fetchIndustries } from '../../store/company/thunks';

import { DASHBOARD_HOME_ROUTE, SIGNIN_PAGE_ROUTE } from '../../config/routes';
import { ICreateCompany } from '../../types/companies';

const RegisterCompanyPage: FC = () => {
  const initialFormData: ICreateCompany = {
    name: '',
    industry: 0,
    location: '',
    primaryColor: '#ffffff',
    textColor: '#000000',
  };

  const [formData, setFormData] = useState(initialFormData);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const company = useSelector(selectUserCompany);
  const industries = useSelector(selectIndustries);
  const domain = user?.email.split('@')[1];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createCompany(formData));
  };
  useEffect(() => {
    if (user && token && company) {
      navigate(DASHBOARD_HOME_ROUTE);
    }
  }, [user, token, company]);

  useEffect(() => {
    if (token === null) {
      navigate(SIGNIN_PAGE_ROUTE);
    }
  }, [token]);

  useEffect(() => {
    dispatch(fetchIndustries());
  }, [dispatch]);

  return (
    <PublicPage>
      <section className="pxp-hero vh-100" style={{ backgroundColor: 'var(--pxpMainColorLight)' }}>
        <div className="row align-items-center pxp-sign-hero-container">
          <div className="col-xl-6 pxp-column">
            <div className="pxp-sign-hero-fig text-center pb-100 pt-100">
              <img src={registerCompanyImage} alt="Sign up" />
              <h1 className="mt-4 mt-lg-5">Register Company</h1>
            </div>
          </div>
          <div className="col-xl-6 pxp-column pxp-is-light">
            <div className="pxp-sign-hero-form pb-100 pt-100">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-7 col-xxl-9">
                  <div className="pxp-sign-hero-form-content">
                    <h5 className="text-center"> Register company {domain} </h5>
                    <form className="mt-4" onSubmit={handleOnSubmit}>
                      <div className="row">
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              icon="fa-light fa-file-signature"
                              label="Company Name"
                              value={formData.name}
                              type="text"
                              onChangeHandler={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormSelect
                              label="Industry"
                              value={formData.industry}
                              options={
                                industries &&
                                industries.map((industry) => ({
                                  value: industry.id,
                                  label: industry.industry,
                                }))
                              }
                              onChangeHandler={(e) => {
                                setFormData({ ...formData, industry: Number(e.target.value) });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              icon="fa-light fa-file-signature"
                              label="Location eg: Amsterdam,Netherlands"
                              type="text"
                              value={formData.location}
                              onChangeHandler={(e) => setFormData({ ...formData, location: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              icon="fa-light fa-file-signature"
                              label="Primary Color"
                              type="color"
                              value={formData.primaryColor}
                              onChangeHandler={(e) => {
                                setFormData({ ...formData, primaryColor: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              icon="fa-light fa-file-signature"
                              label="Text Color"
                              value={formData.textColor}
                              type="color"
                              onChangeHandler={(e) => setFormData({ ...formData, textColor: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        className="btn rounded-pill pxp-sign-hero-form-cta btn-full-width"
                        type="submit"
                      >
                        Continue
                      </button>
                    </form>
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
export default RegisterCompanyPage;
