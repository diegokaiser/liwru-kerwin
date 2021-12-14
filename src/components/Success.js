import React from "react";
import success from "../assets/images/success.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Success = () => {

  const {email} = useSelector(state => state.formOne)

  return (
    <div className="liwru">
      <div className="liwru-home xs-height">
        <h2>Operacion exitosa</h2>
        <div class="liwru-messages-image">
          <img src={success} alt="&lt;¡Mensaje!&gt;" />
        </div>
        <p className="alignCenter mod">
          Hemos registrado tu reclamo con éxito. <br />
          <strong>
            Recuerda que tenemos 24 horas para solucionarlo.
          </strong>
        </p>
        <p className="alignCenter">
          {`Ten en cuenta por favor que nos comunicaremos contigo mediante ${email} al correo.`}
        </p>
        <p className="alignCenter">
          &lt;Por favor, <Link to="/">descarga esta copia</Link> de la
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
// incidencia BCP-00