import resume from "./pics/SABARIA.pdf"
import w from "./pics/whatsapp.png"
import g from "./pics/gmail.png"

function Contact(){
  return(<div className="contact-page">

   <span>
    <a href="mailto:nathansabari2020@gmail.com?subject=Hi Sabari ,Saw your Portfolio" target="_blank">
    <img src={g} className="contact-icons" alt="whatsapp"/>
    </a>
    <a href="https://wa.me/+917010026830" target="_blank">
    <img src={w} className="contact-icons" alt="gmail" />
    </a>
    </span>

    <h2>Phone :+91 7010026830</h2>

    <a href={resume} download="Sabari Resume" className="btn">
    Download my Resume
    </a>


    </div>
  );
}
export default Contact;
