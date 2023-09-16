import ProjectBox from "./Projectbox.jsx";
import s1 from "./pics/sp3.JPG";
import s2 from "./pics/sp5.jpg";
import s3 from "./pics/sp7.JPG";
import s4 from "./pics/sp4.JPG";
import s5 from "./pics/sp2.JPG";
//ADDING NEW PROJECTS BELOW
import s6 from "./pics/FULL STACK website.PNG";
import s7 from "./pics/CSS HELPER.PNG";
import s8 from "./pics/SNAKE GAME.PNG";
import s9 from "./pics/CINEPHILE.PNG";
import s10 from "./pics/EXTENSION.PNG";

function Projects(){
  return(
    <div className="project-page" id="3">

     <div className="pro-container">

  <ProjectBox
    link="https://crick-fan.onrender.com/"
    image={s6}
    about="Cricfan-Full stack website"
    stack="Node js, Express Js, PostgreSQL"
    />
<ProjectBox
    link="https://nath-techie.github.io/css-helper/"
    image={s7}
    about="CSS visualizer"
    stack="Javascript"
    />
    <ProjectBox
    link="https://chrome.google.com/webstore/detail/pomodoro-timer/igcbphpjeebkpfoiechnbangfodgcpkn"
    image={s10}
    about="Chrome browser extension"
    stack="Javascript"
    />
<ProjectBox
    link="https://nath-techie.github.io/snake_game/"
    image={s8}
    about="Snake game"
    stack="Javascript, Canvas API"
    />
<ProjectBox
    link="https://movie-react-nathan.vercel.app/"
    image={s9}
    about="Cinephile"
    stack="React Js, API"
    />
    


     
    <ProjectBox
    link="https://valli-yoga-dhipa.vercel.app/"
    image={s1}
    about="Landing page for a small scale manufacturer"
    stack="React JS"
    />

    <ProjectBox
    link="https://sabari-portfolio.vercel.app/"
    image={s3}
    about="My Developer portfolio"
    stack="React JS"
    />
    <ProjectBox
    link="https://nath-techie.github.io/sabari-memory-game.github.io/"
    image={s4}
    about="Memory game"
    stack="Javascript"
    />
    <ProjectBox
    link="https://nath-techie.github.io/dictionary.github.io/"
    image={s5}
    about="Dictionary"
    stack="Javascript,API"
    />

    </div>
    <div id="update">

    <h4>Please Check my github account for Source Code & other repositories</h4>
    </div>
</div>
  );
}
export default Projects;
