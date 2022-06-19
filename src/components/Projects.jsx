import ProjectBox from "./Projectbox.jsx";
import s1 from "./pics/sp1.JPG";
import s2 from "./pics/sp5.jpg";
import s3 from "./pics/sp6.JPG";
import s4 from "./pics/sp4.JPG";



function Projects(){
  return(
    <div className="project-page">

     <div className="pro-container">
    <ProjectBox
    name="Yoga Dhipa Agarbati"
    link="https://valli-yoga-dhipa.vercel.app/"
    image={s1}
    about=" Landing page for a small scale manufacturer"
    stack="REACT JS"
    />
    <ProjectBox
    name="Story-Time Blog Webstite"
    link= ""
    image={s2}
    about="Full Stack MERN blog website"
    stack="MongoDB,Express,React Js,NodeJs"
    />
    <ProjectBox
    name="My Portfolio😄"
    link="https://sabari-portfolio.vercel.app/"
    image={s3}
    about="My own developer portfolio built with React"
    stack="React Js"
    />
    <ProjectBox
    name="Memory Game"
    link="https://nath-techie.github.io/sabari-memory-game.github.io/"
    image={s4}
    about="A Simple memory game using Javascript,click and check your memory power"
    stack="Javascript"
    />
    </div>
    <div id="update">
    <h3> Weekly one Project will be updated here</h3>
    <h3>Last update: 11 th June 2022</h3>
      <h4>Please Check my github account for Source Code & other repositories</h4>
    </div>
</div>
  );
}
export default Projects;
