import resume from "./pics/SABARIA.pdf"
function Contact(){
  return(<div className="contact-page">
    <h1>Contact</h1>

     <h2>
    <a href="mailto:nathansabari2020@gmail.com?subject=Hi Sabari ,Saw your Portfolio">Email me</a></h2>
    <h2>Phone :+91 7010026830</h2>
<a href={resume} download="Sabari Resume" className="btn">Download my Resume</a>
    </div>
  );
}
export default Contact;
