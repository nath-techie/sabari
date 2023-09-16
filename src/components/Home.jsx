
import sabari from './pics/sabari8.png';
import li from './pics/li3.png';
import github from './pics/github.png';
import lc from './pics/lc.png';
import hr from './pics/HR.png';
import gfg from './pics/gfglogo.png';

 import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Profile from './Profile.jsx'
import Contact from './Contact.jsx';
import '../App.css';
function Home(){

  return(
<div>
  <div className="home"  id="1">
      <div>
        <img src={sabari} className="my-photo" />
      </div>
      <div className="details">

      <span className="role">Hi 👋 I'm</span><br />
      <span className="name">Sabari Nathan</span><br />
      <span className="role">Freelance Web Developer,</span><br />
      <span className="role">by passion</span><br /><br/>
<div className="eprof">
<Profile
link="https://www.linkedin.com/in/a-sabari-nathan/"
image={li}
/>
<Profile
link="https://github.com/nath-techie/"
image={github}
/>
<Profile
link="https://leetcode.com/nathan_to_code/"
image={lc}
/>
<Profile
link="https://auth.geeksforgeeks.org/user/sab2nathan/"
image={gfg}
/>
<Profile
link="https://www.hackerrank.com/nathansabari2020"
image={hr}
/>
 </div>
</div>

</div>
<Skills />
<Projects />
<Contact />

</div>
);
}
export default Home;
