import React from "react";
import "./styles.css";
import GitHub from "../../assets/images/icon-github.svg";
import Facebook from "../../assets/images/icon-facebook.png";
import Linkedin from "../../assets/images/icon-linkedin.png";


function Footer() {
    return (
        <>
            <footer id="Footer">
                <a href="https://github.com/maumauagain"><img src={GitHub} alt="Github"/></a>
                <a href="https://www.facebook.com/amaurimartins.junior"><img src={Facebook} alt="Facebook"/></a>
                <a href="https://www.linkedin.com/in/amauri-martins-j%C3%BAnior-73090a169/"><img src={Linkedin} alt="Linkedin"/></a>

            </footer>
        </>
    )
}


export default Footer;