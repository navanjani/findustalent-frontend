import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import {
  COMPANY_JOBS_ROUTE,
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
  CANDIDATE_DETAILS_ROUTE,
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
import RecruiterCandidatePage from './pages/RecruiterCandidatePage';
import RecruiterEditProfilePage from './pages/RecruiterEditProfilePage';
import CandidateDetailPage from './pages/CandidateDetailPage';

function App() {
  const showClientNavBar = useSelector(selectShowClientNavBar);
  const bodyColor = useSelector(selectBodyColor);
  return (
    <div className="App" style={{ backgroundColor: bodyColor }}>
      {showClientNavBar && <ClientNavbar />}
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={COMPANY_JOBS_ROUTE} element={<CompanyJobsPage />} />
        <Route path={SIGNUP_PAGE_ROUTE} element={<SignUpPage />} />
        <Route path={SIGNIN_PAGE_ROUTE} element={<SigninPage />} />
        <Route path={DASHBOARD_HOME_ROUTE} element={<DashboardPage />} />
        <Route path={DASHBOARD_ADD_JOB_ROUTE} element={<RecruiterAddJobPage />} />
        <Route path={DASHBOARD_MANAGE_JOBS_ROUTE} element={<RecruiterManageJobPage />} />
        <Route path={DASHBOARD_RECRUITER_CANDIDATE_ROUTE} element={<RecruiterCandidatePage />} />
        <Route path={DASHBOARD_RECRUITER_EDIT_PROFILE_ROUTE} element={<RecruiterEditProfilePage />} />
        <Route path={RECRUITER_SIGNUP_PAGE_ROUTE} element={<RecruiterSignupPage />} />
        <Route path={CANDIDATE_SIGNUP_PAGE_ROUTE} element={<CandidateSignupPage />} />
        <Route path={CANDIDATE_DETAILS_ROUTE} element={<CandidateDetailPage />} />
      </Routes>
      {showClientNavBar && <ClientFooter />}
    </div>
  );
}

export default App;
