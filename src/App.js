import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Sidebar from './components/Sidebar.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
    <Sidebar
     />

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;