import ProjectBox from "./Projectbox.jsx";
import s1 from "./pics/sp3.JPG";
import s2 from "./pics/sp5.jpg";
import s3 from "./pics/sp7.JPG";
import s4 from "./pics/sp4.JPG";
import s5 from "./pics/sp2.JPG";


function Projects(){
  return(
    <div className="project-page" id="3">

     <div className="pro-container">
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
