import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';
import HomeContainer from './Pages/HomeContainer';
import AboutContainer from './Pages/AboutContainer';
import ProjectsContainer from './Pages/ProjectsContainer';
import ContactMeContainer from './Pages/ContactMeContainer';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/projects" element={<ProjectsContainer />} />
      <Route path="/about" element={<AboutContainer />} />
      <Route path="/contact-me" element={<ContactMeContainer />} />
    </Routes>
  </Router>
);

export default App;
