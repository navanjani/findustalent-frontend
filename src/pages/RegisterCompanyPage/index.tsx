import React, { FC } from 'react';
import PublicPage from '../../components/PublicPage';
import registerCompanyImage from '../../theme/images/service-2-icon.png';
import FormInput from '../../components/FormInput';
// import FormInput from '../../components/FormInput';

const RegisterCompanyPage: FC = () => (
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
                  <h5 className="text-center">Register</h5>
                  <form className="mt-4">
                    <div className="row">
                      <div className="col">
                        <div className="form-floating mb-3">
                          <FormInput icon="fa-light fa-file-signature" label="Company Name" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-floating mb-3">
                          <FormInput icon="fa-light fa-file-signature" label="Industry" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-floating mb-3">
                          <FormInput icon="fa-light fa-file-signature" label="Domain" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-floating mb-3">
                          <FormInput icon="fa-light fa-file-signature" label="Location" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-floating mb-3">
                          <FormInput icon="fa-light fa-file-signature" label="Primary Color" type="text" />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-floating mb-3">
                          <FormInput icon="fa-light fa-file-signature" label="Text Color" type="text" />
                        </div>
                      </div>
                    </div>

                    <button className="btn rounded-pill pxp-sign-hero-form-cta btn-full-width" type="submit">
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
export default RegisterCompanyPage;
