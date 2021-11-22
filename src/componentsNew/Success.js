import React from "react";
import success from "../assets/images/success.svg";
import { Link } from "react-router-dom";

export const Success = () => {
  return (
    <div className="liwru">
      <div className="liwru-home xs-height">
        <h2>&lt;¡Mensaje!&gt;</h2>
        <div class="liwru-messages-image">
          <img src={success} alt="&lt;¡Mensaje!&gt;" />
        </div>
        <p className="alignCenter mod">
          Hemos registrado tu reclamo con éxito. <br />
          <strong>
            Recuerda que tenemos &lt;XX horas&gt; para solucionarlo.
          </strong>
        </p>
        <p className="alignCenter">
          Ten en cuenta por favor que nos comunicaremos contigo mediante
          &lt;medio de contacto&gt; al &lt;dato de contacto&gt;.
        </p>
        <p className="alignCenter">
          &lt;Por favor, <a href="#">descarga esta copia</a> de la
          incidencia&gt;
        </p>
        <div className="liwru-actions fixed">
          <Link to="/empezar" className="liwru-actions-goback">
            Ir al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

// figma: mensaje
