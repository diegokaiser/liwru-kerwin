import React from "react";
import { Link } from "react-router-dom";
import { IncidenciaService } from "./services/IncidenciaService";

export const Results = ({estado}) => {
  return (
    <div className="liwru">
      <div className="liwru-home xs-height">
        <IncidenciaService estado = {estado} />
        <div className="liwru-actions fixed">
          <Link to="/" className="liwru-actions-goon">
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

// figma: home 3
