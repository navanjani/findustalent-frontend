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
        <Route path={DASHBOARD_HOME_ROUTE} element={<DashboardPage />} />
        <Route path={DASHBOARD_ADD_JOB_ROUTE} element={<RecruiterAddJobPage />} />
        <Route path={RECRUITER_SIGNUP_PAGE_ROUTE} element={<RecruiterSignupPage />} />
        <Route path={CANDIDATE_SIGNUP_PAGE_ROUTE} element={<CandidateSignupPage />} />
      </Routes>
      {showClientNavBar && <ClientFooter />}
    </div>
  );
}

export default App;
