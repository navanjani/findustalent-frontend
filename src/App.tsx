import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import {
  DYNAMIC_COMPANY_JOBS_ROUTE,
  HOME_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
  DASHBOARD_HOME_ROUTE,
  DASHBOARD_ADD_JOB_ROUTE,
  RECRUITER_SIGNUP_PAGE_ROUTE,
  CANDIDATE_SIGNUP_PAGE_ROUTE,
  SIGNIN_PAGE_ROUTE,
  DASHBOARD_MANAGE_JOBS_ROUTE,
  DASHBOARD_RECRUITER_CANDIDATE_ROUTE,
  DASHBOARD_RECRUITER_EDIT_PROFILE_ROUTE,
  DYNAMIC_CANDIDATE_DETAILS_ROUTE,
  DASHBOARD_CANDIDATE_EDIT_PROFILE_ROUTE,
  DASHBOARD_CANDIDATE_APPLICATIONS_ROUTE,
  DASHBOARD_CANDIDATE_CHANGE_PASSWORD_ROUTE,
  DASHBOARD_RECRUITER_CHANGE_PASSWORD_ROUTE,
  DASHBOARD_RECRUITER_SUBSCRIPTIONS_ROUTE,
  CONTACT_US_ROUTE,
  DYNAMIC_JOB_DETAILS_ROUTE,
} from './config/routes';
import HomePage from './pages/HomePage';
import './App.scss';
import ClientNavbar from './components/ClientNavbar';
import CompanyJobsPage from './pages/CompanyJobsPage';
import SignUpPage from './pages/SignUpPage';
import ClientFooter from './components/ClientFooter';
import DashboardPage from './pages/DashboardPage';
import { selectBodyColor, selectShowClientNavBar } from './store/appState/selectors';
import RecruiterAddJobPage from './pages/RecruiterAddJobPage';
import RecruiterSignupPage from './pages/RecruiterSignupPage';
import CandidateSignupPage from './pages/CandidateSignupPage';
import SigninPage from './pages/SigninPage';
import RecruiterManageJobPage from './pages/RecruiterManageJobPage';
import RecruiterCandidatePage from './pages/RecruiterDasboardCandidatePage';
import RecruiterEditProfilePage from './pages/RecruiterDashboardEditProfilePage';
import CandidateDetailPage from './pages/CandidateDetailPage';
import CandidateDashboardEditProfilePage from './pages/CandidateDashboardEditProfilePage';
import CandidateDashboardApplicationsPage from './pages/CandidateDashboardApplicationsPage';
import CandidateDashboardChangePasswordPage from './pages/CandidateDashboardChangePasswordPage';
import RecruiterDashboardChangePasswordPage from './pages/RecruiterDashboardChangePasswordPage';
import RecruiterDashboardSubscriptionsPage from './pages/RecruiterDashboardSubscriptionsPage';
import ContactUsPage from './pages/ContactUsPage';
import JobDetailPage from './pages/JobDetailPage';

function App() {
  const showClientNavBar = useSelector(selectShowClientNavBar);
  const bodyColor = useSelector(selectBodyColor);
  return (
    <div className="App" style={{ backgroundColor: bodyColor }}>
      {showClientNavBar && <ClientNavbar />}
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={DYNAMIC_COMPANY_JOBS_ROUTE} element={<CompanyJobsPage />} />
        <Route path={SIGNUP_PAGE_ROUTE} element={<SignUpPage />} />
        <Route path={SIGNIN_PAGE_ROUTE} element={<SigninPage />} />
        <Route path={CONTACT_US_ROUTE} element={<ContactUsPage />} />
        <Route path={DASHBOARD_HOME_ROUTE} element={<DashboardPage />} />
        <Route path={DASHBOARD_ADD_JOB_ROUTE} element={<RecruiterAddJobPage />} />
        <Route path={DASHBOARD_MANAGE_JOBS_ROUTE} element={<RecruiterManageJobPage />} />
        <Route path={DASHBOARD_RECRUITER_CANDIDATE_ROUTE} element={<RecruiterCandidatePage />} />
        <Route
          path={DASHBOARD_RECRUITER_CHANGE_PASSWORD_ROUTE}
          element={<RecruiterDashboardChangePasswordPage />}
        />
        <Route path={DASHBOARD_RECRUITER_EDIT_PROFILE_ROUTE} element={<RecruiterEditProfilePage />} />
        <Route path={RECRUITER_SIGNUP_PAGE_ROUTE} element={<RecruiterSignupPage />} />
        <Route path={CANDIDATE_SIGNUP_PAGE_ROUTE} element={<CandidateSignupPage />} />
        <Route path={DYNAMIC_CANDIDATE_DETAILS_ROUTE} element={<CandidateDetailPage />} />
        <Route
          path={DASHBOARD_CANDIDATE_EDIT_PROFILE_ROUTE}
          element={<CandidateDashboardEditProfilePage />}
        />
        <Route
          path={DASHBOARD_CANDIDATE_APPLICATIONS_ROUTE}
          element={<CandidateDashboardApplicationsPage />}
        />
        <Route
          path={DASHBOARD_CANDIDATE_CHANGE_PASSWORD_ROUTE}
          element={<CandidateDashboardChangePasswordPage />}
        />
        <Route
          path={DASHBOARD_RECRUITER_SUBSCRIPTIONS_ROUTE}
          element={<RecruiterDashboardSubscriptionsPage />}
        />
        <Route path={DYNAMIC_JOB_DETAILS_ROUTE} element={<JobDetailPage />} />
      </Routes>
      {showClientNavBar && <ClientFooter />}
    </div>
  );
}

export default App;
