import '../App.css';
import { Link } from "react-router-dom";
import sn1 from './pics/SN2.png';
import pro from './pics/project.png';
import contact from './pics/contact.png';
import webpage from "./pics/webpage.png";

import React from 'react';
import ReactDOM from 'react-dom/client';

function Sidebar(){



  return(
<div className="sidebar">

<Link to="/" className="navtext">
<img src={sn1}  className="my-logo"   />
</Link>

<Link to="/skills"className="navtext">
<span> Skills  </span>
<img src={pro} className="icons" />
</Link>

<Link to="/projects"className="navtext">
<span> Projects  </span>
<img src={webpage} className="icons" />

</Link>

<Link to="/contact" className="navtext">
<span>Contact  </span>
<img src={contact}  className="icons" />
</Link>

</div>
);
}
export default Sidebar;
