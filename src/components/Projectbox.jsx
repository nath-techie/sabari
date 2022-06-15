function ProjectBox(props){
  return(
    <div>
    <div className="pro-box">
    <h2>{props.name}</h2>
    <a href={props.link} target="_blank">
    <img src={props.image} className="screenshot" alt="screenshot" />
    </a>
    <p className="about">{props.about}</p>
    </div>
</div>
  );
}
export default ProjectBox;
