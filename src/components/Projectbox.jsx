function ProjectBox(props){

  return(
<div>

    <div className="pro-box">

      <img src={props.image} className="screenshot" alt="screenshot" />

      <div className="about">
        <p>Stacks:</p>
        <p className="stack" >{props.stack}</p>
        <p className="title">{props.about}</p>
        <a href={props.link} target="_blank"><button className="btn">Visit</button>
          </a>
      </div>
    </div>
</div>
  );
}
export default ProjectBox;
