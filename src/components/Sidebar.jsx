import '../App.css';
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

<div className="navtext">
<a href="#1" >
<img src={sn1}  className="my-logo" id="logo"  />
 </a>
 </div>

<div className="navtext" >
<a href="#2"> Skills  </a>
<img src={pro} className="icons" />
</div>

<div className="navtext" >
<a href="#3"> Projects  </a>
<img src={webpage} className="icons" />
</div>


<div className="navtext" >
<a href="#4">Contact  </a>
<img src={contact}  className="icons" />
</div>

<div>
<img src={menu} className="menu-icon" onClick={()=>setIsNavExpanded(!isNavExpanded)}/>
</div>
</div>
);
}
export default Sidebar;
