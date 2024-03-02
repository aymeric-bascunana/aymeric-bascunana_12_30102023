import React from "react";
import "../Footer/Footer.scss";

function Footer() {
  return (
    <>
      <section id="Ancre-footer" className="Footer-Contenant">
        <div id="Body-text">
          <h2 className="titre-contact">Contact</h2>
          <form action="" method="post">
            <label> Prénom</label>
            <input
              className="info"
              type="text"
              name="prenom"
              value="Aymeric Bascunana-Garnier"
              readOnly
            />
            <label> E-mail</label>
            <input
              className="info"
              type="text"
              name="email"
              value="aymeric.bascunana@gmail.com"
              readOnly
            />
            <label> Message</label>
            <input
              className="text"
              type="text"
              name="message"
              placeholder="Mon numero de téléphone= 06.62.74.90.80"
            />
            <input className="btn" type="submit" value="Envoyer" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Footer;
