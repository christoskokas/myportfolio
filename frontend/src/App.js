import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import './App.css'

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          MyPortfolio
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/Home" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the Flask API
    axios.get('http://127.0.0.1:5000/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the project data!", error);
      });
  }, []);

  return (
    <div className="Home">
      <h1>My Computer Vision Projects</h1>
      <div className="projects-list">
        {projects.map(project => (
          <div 
            className="project-card" 
            key={project.id}
            style={{ cursor: 'pointer', marginBottom: '20px', display: 'flex', alignItems: 'center' }}
          >
            <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={`http://127.0.0.1:5000/static/videos/${project.image}`} />
              <div>
                <h2>{project.title}</h2>
                <p>{project.abstract}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="Profile">
      My name is Chris
    </div>

  );
}

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the Flask API
    axios.get('http://127.0.0.1:5000/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the project data!", error);
      });
  }, []);
  
  return (
    <div className="Projects">
      <h1>My Computer Vision Projects</h1>
      <div className="projects-list">
        {projects.map(project => (
          <div 
            className="project-card" 
            key={project.id}
            style={{ cursor: 'pointer', marginBottom: '20px', display: 'flex', alignItems: 'center' }}
          >
            <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={`http://127.0.0.1:5000/static/videos/${project.image}`} />
              <div>
                <h2>{project.title}</h2>
                <p>{project.abstract}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {

  const [isMobileView, setIsMobileView] = useState(false);

  const toggleView = () => {
    setIsMobileView(!isMobileView);
  };
  
  return (
    <div className={`App`}>
    {/* <button onClick={toggleView} className="toggle-view-btn">
      {isMobileView ? 'Desktop' : 'Mobile'}
    </button> */}

    {/* Router that controls different routes in the app */}
    <Router>
    <Navbar /> {/* Include the Navbar on all pages */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
