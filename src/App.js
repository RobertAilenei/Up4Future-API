import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import AfterLogIn from './AfterLogIn';
import CalculateLoans from './CalculateLoans';
import Announcement from './Announcement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/calculate-loans-page" element={<CalculateLoans />} />
        <Route path="/announcement-page" element={<Announcement />} />
        <Route path="/after-login-page" element={<AfterLogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
