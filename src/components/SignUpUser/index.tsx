import React, { FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput';
import { SIGNIN_PAGE_ROUTE } from '../../config/routes';
import { signUp } from '../../store/user/thunks';
import { useAppDispatch } from '../../store';

interface ISignUpUser {
  userType: number;
}

const SignUpUser: FC<ISignUpUser> = ({ userType }: ISignUpUser) => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    userType,
  };

  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useAppDispatch();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signUp(formData));
  };
  return (
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
                      type="email"
                      label={userType === 2 ? 'Work-Email Address' : 'Email Address'}
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
                      type="password"
                      label=" Password"
                      icon="fa-lock"
                      value={formData.password}
                      onChangeHandler={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
              <button className="btn rounded-pill pxp-sign-hero-form-cta btn-full-width" type="submit">
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
  );
};

export default SignUpUser;
