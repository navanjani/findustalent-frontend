import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { COMPANY_JOBS_ROUTE, HOME_PAGE_ROUTE } from './config/routes';
import HomePage from './pages/HomePage';
import './App.scss';
import ClientNavbar from './components/ClientNavbar';
import CompanyJobsPage from './pages/CompanyJobsPage';

function App() {
  return (
    <div className="App">
      <ClientNavbar />
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
        <Route path={COMPANY_JOBS_ROUTE} element={<CompanyJobsPage />} />
      </Routes>
    </div>
  );
}

export default App;
