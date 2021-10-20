import React from "react";
import { Link } from "react-router-dom";

export const StepZero = () => {
  return (
    <div className="liwru">
      <div className="liwru-home xs-height">
        <h2>Formulario de Ingreso de Reclamos</h2>
        <p className="search">
          Antes de iniciar el registro de tu reclamo, toma en cuenta que las
          indemnizaciones por daños y perjuicios se solicitan a través de la vía
          jurisdiccional correspondiente (Poder Judicial) y también podrás
          considerar la regulación del arbitraje de consumo.
        </p>
        <p>
          En el caso de las medidas correctivas y sanciones, éstas se dan en el
          marco de una denuncia administrativa (Sumarísimo y Ordinario).
        </p>
        <p className="search">
          <strong>Anónimo Fulanillo</strong>
          Encargado del área de reclamos y quejas
        </p>
        <div className="liwru-forms stepzero">
          <div className="liwru-forms-group fullsize">
            <label>
              <input type="checkbox" />
              He leído y estoy de acuerdo con los alcances.
            </label>
          </div>
        </div>
        <div className="liwru-actions fixed">
          <Link to="/step-one" className="liwru-actions-goon">
            ¡Empecemos!
          </Link>
        </div>
      </div>
    </div>
  );
};

// figma: inicio
