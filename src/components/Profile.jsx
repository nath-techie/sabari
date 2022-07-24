function Profile(props){
  return(
    <div >
    <a href={props.link} target="_blank">
    <img src={props.image}  className="profile" />
    </a>
    </div>

  );
}


export default Profile;
