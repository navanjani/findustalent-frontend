import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HOME_PAGE_ROUTE } from './config/routes';
import HomePage from './pages/HomePage';
import './App.scss';
import ClientNavbar from './components/ClientNavbar';

function App() {
  return (
    <div className="App">
      <ClientNavbar />
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
