import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import signupImageRecruiter from '../../theme/images/customer-4.png';
import { COMPANY_REGISTER_ROUTE, DASHBOARD_HOME_ROUTE } from '../../config/routes';
import { selectToken, selectUser } from '../../store/user/selectors';
import SignUpUser from '../../components/SignUpUser';

const RecruiterSignupPage: FC = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null && user && user.userType === 2 && user.companyId === null) {
      navigate(COMPANY_REGISTER_ROUTE);
    } else if (token !== null) {
      navigate(DASHBOARD_HOME_ROUTE);
    }
  }, [token, navigate, user]);

  return (
    <section className="pxp-hero vh-100" style={{ backgroundColor: 'var(--pxpMainColorLight)' }}>
      <div className="row align-items-center pxp-sign-hero-container">
        <div className="col-xl-6 pxp-column">
          <div className="pxp-sign-hero-fig text-center pb-100 pt-100">
            <img src={signupImageRecruiter} alt="Sign up" />
            <h1 className="mt-4 mt-lg-5">Create an account</h1>
          </div>
        </div>
        <div className="col-xl-6 pxp-column pxp-is-light">
          <SignUpUser userType={2} />
        </div>
      </div>
    </section>
  );
};
export default RecruiterSignupPage;
