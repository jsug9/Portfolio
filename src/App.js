import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';
import HomeContainer from './Pages/HomeContainer';
import AboutContainer from './Pages/AboutContainer';
import PortfolioContainer from './Pages/PortfolioContainer';
import ContactContainer from './Pages/ContactContainer';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/portfolio" element={<PortfolioContainer />} />
      <Route path="/about" element={<AboutContainer />} />
      <Route path="/contact" element={<ContactContainer />} />
    </Routes>
  </Router>
);

export default App;
