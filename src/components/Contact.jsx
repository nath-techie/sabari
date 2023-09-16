import resume from "./pics/Sabari Nathan Resume.pdf"
import w from "./pics/whatsapp.png"
import g from "./pics/gmail.png"

function Contact(){
  return(<div className="contact-page"  id="4">
<span>Contact me at:</span>
   <span>
    <a href="mailto:nathansabari2020@gmail.com?subject=Hi Sabari ,Saw your Portfolio" target="_blank">
    <img src={g} className="contact-icons" alt="whatsapp"/>
    </a>
    <a href="https://wa.me/+917010026830" target="_blank">
    <img src={w} className="contact-icons" alt="gmail" />
    </a>
    </span>



    <a href={resume} download="Sabari Resume" className="btn resume">
    Download my Resume
    </a>
<br />
<br/>

    </div>
  );
}
export default Contact;
