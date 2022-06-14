import '../App.css';
import { Routes, Route, Link } from "react-router-dom";
import sn1 from './pics/SN1.png';
import pro from './pics/project.png';
import contact from './pics/contact.png';
import React from 'react';
import ReactDOM from 'react-dom/client';

function Sidebar(){



  return(
<div className="sidebar">
<Link to="/">
<img src={sn1}  className="my-logo"   />
</Link>

<Link to="/projects">
<img src={pro} className="icons" />
</Link>

<Link to="/contact">
<img src={contact}  className="icons" />
</Link>

</div>
);
}
export default Sidebar;
