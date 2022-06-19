
import sabari from './pics/sabari8.png';

import li from './pics/li3.png';
import github from './pics/github.png';
import '../App.css';
function Home(){

  return(
    <div className="home">
    <div>
<img src={sabari} className="my-photo" alt="logo" />
</div>
<div className="details">
<span className="role">Hi, I'm</span><br />
<span className="name">Sabari Nathan</span><br />
<span className="role">Full Stack Web Developer,</span><br />
<span className="role">by passion</span><br /><br/>
<a href="https://www.linkedin.com/in/a-sabari-nathan-b48962140/" target="_blank"><img src={li}  className="profile" /></a>

<a href="https://github.com/nath-techie" target="_blank"><img src={github}  className="profile" /></a>

</div>
</div>
);
}
export default Home;
