import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import './App.css'; // Optional: Keep for global styles

export default function App() {
  return (
    <Router>
      {/* Banner Section */}
      <div className="banner">
        <h1 className="banner-title">My Portfolio</h1>
      </div>

      {/* Menu Bar */}
      <header className="menu-bar">
        <nav>
          <ul>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/interests">Interests</Link></li>
            <li><Link to="/projects">My Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
    </Router>
  );
}