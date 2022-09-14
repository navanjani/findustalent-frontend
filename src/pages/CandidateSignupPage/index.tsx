import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import signupImageCandidate from '../../theme/images/signup-big-fig.png';
import PublicPage from '../../components/PublicPage';
import { DASHBOARD_HOME_ROUTE } from '../../config/routes';
import { selectToken } from '../../store/user/selectors';
import SignUpUser from '../../components/SignUpUser';

const CandidateSignupPage: FC = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate(DASHBOARD_HOME_ROUTE);
    }
  }, [token, navigate]);

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
            <SignUpUser userType={3} />
          </div>
        </div>
      </section>
    </PublicPage>
  );
};
export default CandidateSignupPage;
