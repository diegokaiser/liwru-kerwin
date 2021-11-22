import React from "react";
import whatsapp from "../assets/images/whatsapp.svg";
import { Link } from "react-router-dom";

export const Start = () => {

  return (
    <div className="liwru">
      <div className="liwru-home">
        <h2>Libro de Reclamaciones</h2>
        <p>
          Antes de iniciar el registro de tu reclamo, toma en cuenta que las
          indemnizaciones por daños y perjuicios se solicitan a través de la vía
          jurisdiccional correspondiente (Poder Judicial) y también podrás
          considerar la regulación del arbitraje de consumo.
        </p>
        <div className="liwru-actions">
          <Link to="/step-zero" className="liwru-actions-goon gotoIncidencia">
            Hacer un reclamo o queja
          </Link>
          <Link
            to="/buscar-incidencia"
            className="liwru-actions-goon gotoSearcher"
          >
            Ver mi reclamo o queja
          </Link>
        </div>
      </div>
      <div className="liwru-actions outside">
        <a
          href="https://api.whatsapp.com/send?phone=51993119898"
          className="liwru-actions-goon gotoWhatsapp"
        >
          <img src={whatsapp} alt="Cuéntamos por Whatsapp!" /> ¡Hola! ¿Cómo te
          puedo ayudar?
        </a>
      </div>
    </div>
  );
};

// figma: home
