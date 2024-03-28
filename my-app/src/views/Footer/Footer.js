import React from "react";
import "../Footer/Footer.scss";

function Footer({ theme }) {
  return (
    <>
      <section
        id="Ancre-footer"
        className={`Footer-Contenant ${theme === "light" ? "light-theme" : ""}`}
      >
        <div id="Body-text">
          <h2 className="titre-contact">Contact</h2>
          <form action="#">
            <label> Prénom</label>
            <input
              disabled
              className="info"
              type="text"
              name="prenom"
              value="Aymeric Bascunana-Garnier"
              readOnly
            />
            <label> E-mail</label>
            <input
              disabled
              className="info"
              type="text"
              name="email"
              value="aymeric.bascunana@gmail.com"
              readOnly
            />
            <label> Téléphone</label>
            <input
              className="info"
              disabled
              type="phone"
              name="telephone"
              placeholder="06.62.74.90.80"
            />
            <input disabled className="btn" type="submit" value="Envoyer" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Footer;
