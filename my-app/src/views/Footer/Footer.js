import React from "react";
import "../Footer/Footer.scss";

function Footer() {
  return (
    <>
      <section id="Ancre-footer" className="Footer-Contenant">
        <div id="Body-text">
          <ul className="ul-footer">
            <li>Numéro de téléphone: 01.02.03.04.05</li>
            <li>E-mail: Adressemail@gmail.com</li>
            <li>
              <img src="../../assets/Logo-x"></img>
              <img src="../../assets/Logo-insta"></img>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Footer;
