import ProjectBox from "./Projectbox.jsx";
import s1 from "./pics/sp1.JPG";
import s2 from "./pics/sp2.JPG";
import s3 from "./pics/sp3.JPG";
import s4 from "./pics/sp4.JPG";



function Projects(){
  return(
    <div className="project-page">

     <div className="pro-container">
    <ProjectBox
    name="Yoga Dhipa Agarbati"
    link="https://valli-yoga-dhipa.vercel.app/"
    image={s1}
    about=" Landing Page,for a Small Scale Agarbati manufacturer in Tirunelveli  "
    />
    <ProjectBox
    name="Story-Time Blog Webstite"
    link= ""
    image={s2}
    about="Full Stack MERN blog website"
    />
    <ProjectBox
    name="My Portfolio😄"
    link="https://sabari-portfolio.vercel.app/"
    image={s3}
    about="My own developer portfolio built with React"
    />
    <ProjectBox
    name="Memory Game"
    link="https://nath-techie.github.io/sabari-memory-game.github.io/"
    image={s4}
    about="A Simple memory game using Javascript,click and check your memory power"
    />
    </div>
    <h2>Currently Working on 2 projects..</h2>
    <h2> Weekly one Project will be updated here</h2>
    <h2>Last update: 11 th June 2022</h2>
      <h4>Please Check my github account for Source Code & other repositories</h4>
</div>
  );
}
export default Projects;
