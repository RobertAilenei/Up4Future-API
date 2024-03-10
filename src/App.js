import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import AfterLogIn from './AfterLogIn';
import CalculateLoans from './CalculateLoans';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculateLoans />} />
        <Route path="/after-login-page" element={<AfterLogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
