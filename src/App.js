import React from 'react';


import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Sidebar from './components/Sidebar.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
<div className="nav">
  <Sidebar />
  </div>
  <Home />
<div className="ball"> </div>
 
    </div>

  );
}

export default App;
