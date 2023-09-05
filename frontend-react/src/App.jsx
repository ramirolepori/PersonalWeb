import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Index from './components/Index';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './assets/css/style.css';
import './components/i18n'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Index />
        <About />
        <Projects />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
