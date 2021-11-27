import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetIncidenceValues } from "../actions/getIncidence";
import { clearIdQuery } from "../actions/idQuery";
import { IncidenceService } from "./IncidenceService";

export const Results = () => {
  const dispatch = useDispatch()

  const resetIncidence = () => {
    dispatch(resetIncidenceValues())
    dispatch(clearIdQuery())
  }

  return (
    <div className="liwru">
      <div className="liwru-home xs-height">
        <IncidenceService />
        <div className="liwru-actions fixed">
          <Link 
            to="/" 
            className="liwru-actions-goon"
            onClick={resetIncidence}>
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

// figma: home 3
