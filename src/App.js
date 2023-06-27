import React from 'react';
import DashBoard from './pages/dashboard';
import HeroSection from './components/heroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './utiles/context/context';
import './App.css';

function App() {
  const userCurrency = JSON.parse(localStorage.getItem("UserCurrency"));
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path = '/' element = {<HeroSection/>} />
            <Route path = '/dashboard' element = {<DashBoard/>} />
          </Routes>
        </Router>
      </ContextProvider>
      
      
    </div>
  );
}

export default App;
