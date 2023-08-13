import React from 'react';
import './assets/css/style.css';
import './assets/css/about.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="">About Me</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="certifications.html">Certifications</a></li>
            <li><a href="contact.html">Contact Me</a></li>
          </ul>
        </nav>
        <select className="select-language">
            <option value="" selected disabled>
              Language
            </option>
            <option value="">Español</option>
            <option value="">日本語</option>
          </select>
      </header>
    </div>
  );
}

export default App;
