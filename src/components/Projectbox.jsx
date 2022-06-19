function ProjectBox(props){

  return(
    <div>
    <div className="pro-box">

    <a href={props.link} target="_blank">
    <img src={props.image} className="screenshot" alt="screenshot" />
    </a>

    </div>
</div>
  );
}
export default ProjectBox;
// <p className="about">{props.about}</p>
// <p className="about">Stacks:</p>
// <p className="stack" >{props.stack}</p>
    // <h2>{props.name}</h2>
