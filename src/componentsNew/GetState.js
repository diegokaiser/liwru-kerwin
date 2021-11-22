import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { idQuery } from "../actions/idQuery";
import { getIncidence } from "../actions/getIncidence";


export const GetState = () => {
  
  const dispatch = useDispatch();
  const {idQuery : idField} = useSelector(state => state.idQuery);
  const [showLink, setShowLink] = useState(false);
  const handleChange = (event) => dispatch(idQuery(event.target.value));
  
  const handleFetch = () => dispatch(getIncidence());

  useEffect(() => {
    
    if (idField.length > 0) setShowLink(true);
    else setShowLink(false);

  }, [idField]);

  return (
    <div className="liwru">
      <div className="liwru-home xs-height">
        <h2>Ver el estado de mi incidencia</h2>
        <p className="search">
          Te informamos que según la Ley Nro. 29733, Ley de Protección de datos
          Personales, todos los dato personales proporcionados son tratados y/o
          proporcionados por el Indecopi.
        </p>
        <p>
          En el caso de las medidas correctivas y sanciones, se dan según el
          marco de una denuncia administrativa (Sumarísmo y Ordinario).
        </p>
        <div className="liwru-forms success">
          <div className="liwru-forms-group">
            <strong>Código de incidencia *</strong>
            <input
              type="text"
              name="codigoIncidencia"
              placeholder= "Digita tu código"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="liwru-actions fixed">
          <Link to="/empezar" className="liwru-actions-goback">
            Anterior
          </Link>
          <Link 
            to='/resultado'
            className={showLink ? "liwru-actions-goon" : "liwru-actions-goon disabled-link"}
            onClick={handleFetch}
            >
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
};

// figma: home 2
