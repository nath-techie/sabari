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
   
    </span>



<br />
<br/>

    </div>
  );
}
export default Contact;
