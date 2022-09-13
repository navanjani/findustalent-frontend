import React, { FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import signupImageCandidate from '../../theme/images/signup-big-fig.png';
import PublicPage from '../../components/PublicPage';
import { SIGNIN_PAGE_ROUTE } from '../../config/routes';

const CandidateSignupPage: FC = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    profilePicture: '',
    location: '',
    password: '',
    rePassword: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <PublicPage>
      <section className="pxp-hero vh-100" style={{ backgroundColor: 'var(--pxpMainColorLight)' }}>
        <div className="row align-items-center pxp-sign-hero-container">
          <div className="col-xl-6 pxp-column">
            <div className="pxp-sign-hero-fig text-center pb-100 pt-100">
              <img src={signupImageCandidate} alt="Sign up" />
              <h1 className="mt-4 mt-lg-5">Create an account</h1>
            </div>
          </div>
          <div className="col-xl-6 pxp-column pxp-is-light">
            <div className="pxp-sign-hero-form pb-100 pt-100">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-7 col-xxl-9">
                  <div className="pxp-sign-hero-form-content">
                    <h5 className="text-center">Sign Up</h5>
                    <form className="mt-4" onSubmit={handleOnSubmit}>
                      <div className="row">
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              type="text"
                              label="First Name"
                              icon="fa-light fa-user"
                              value={formData.firstName}
                              onChangeHandler={(e) => {
                                setFormData({ ...formData, firstName: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              type="text"
                              label="Last Name"
                              icon="fa-light fa-user"
                              value={formData.lastName}
                              onChangeHandler={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              type="text"
                              label="Email Address"
                              icon="fa-envelope-o"
                              value={formData.email}
                              onChangeHandler={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              type="text"
                              label="Phone Number"
                              icon="fa-light fa-phone"
                              value={formData.phoneNumber}
                              onChangeHandler={(e) => {
                                setFormData({ ...formData, phoneNumber: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              type="text"
                              label="Location"
                              icon="fa-light fa-compass"
                              value={formData.location}
                              onChangeHandler={(e) => {
                                setFormData({ ...formData, location: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              type="password"
                              label="Password"
                              icon="fa-lock"
                              value={formData.password}
                              onChangeHandler={(e) => {
                                setFormData({ ...formData, password: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              type="text"
                              label="Profile Picture"
                              icon=" fa-light fa-user"
                              value={formData.profilePicture}
                              onChangeHandler={(e) => {
                                setFormData({ ...formData, profilePicture: e.target.value });
                              }}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-floating mb-3">
                            <FormInput
                              type="password"
                              label=" Re-enter Password"
                              icon="fa-lock"
                              value={formData.rePassword}
                              onChangeHandler={(e) => {
                                setFormData({ ...formData, rePassword: e.target.value });
                              }}
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
                      <div className="mt-4 text-center pxp-sign-hero-form-small">
                        Already have an account?
                        <Link to={SIGNIN_PAGE_ROUTE}>
                          <span>Sign in</span>
                        </Link>
                      </div>
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
export default CandidateSignupPage;
