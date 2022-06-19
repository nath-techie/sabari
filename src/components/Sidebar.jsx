import '../App.css';
import { Link } from "react-router-dom";
import sn1 from './pics/SN2.png';
import pro from './pics/project.png';
import contact from './pics/contact.png';
import webpage from "./pics/webpage.png";
import menu from "./pics/menu.png";


import React,{useState} from 'react';

function Sidebar(){

const [isNavExpanded, setIsNavExpanded] = useState(false);

  return(
<div className={isNavExpanded ?"responsive":"sidebar"}>

<Link to="/" className="navtext">
<img src={sn1}  className="my-logo" id="logo"  />
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
<div>
<img src={menu} className="menu-icon" onClick={()=>setIsNavExpanded(!isNavExpanded)}/>
</div>
</div>
);
}
export default Sidebar;
