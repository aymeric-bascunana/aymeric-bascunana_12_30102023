import React from "react";
import "../Footer/Footer.scss";
// import X from "../../assets/Logo-X.png";
// import instagram from "../../assets/Logo-insta.png";

function Footer() {
  return (
    <>
      <section id="Ancre-footer" className="Footer-Contenant">
        <div id="Body-text">
          <h2 className="titre-contact">Contact</h2>
          <form action="" method="post">
            <label> Prenom</label>
            <input className="info" type="text" name="prenom" />
            <label> E-mail</label>
            <input className="info" type="text" name="E-mail" />
            <label> Message</label>
            <input className="text" type="text" name="Message" />
            <input className="btn" type="submit" value="Envoyer"></input>
          </form>
          {/* <ul className="ul-footer">
            <li>
              <img className="twitter" src={X}></img>
              <img className="insta" src={instagram}></img>
            </li>
          </ul> */}
        </div>
      </section>
    </>
  );
}

export default Footer;
