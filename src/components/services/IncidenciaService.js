import React from "react";
import { useFetchDataIncidencia } from "../hooks/useFetchDataIncidencia";
import alarm from "../../assets/images/alarm.svg";
import success from "../../assets/images/success.svg";
import error from "../../assets/images/error.svg";

export const IncidenciaService = ({estado}) => {
  const { data: incidencia, loading } = useFetchDataIncidencia(estado);
  let imagen;
  let datoMedio;
  let datoContacto;
  if (incidencia.estado === "en proceso" || incidencia.estado === "recibida") {
    imagen = <img src={alarm} alt={incidencia.estado} />;
  } else if (incidencia.estado === "resuelta") {
    imagen = <img src={success} alt={incidencia.estado} />;
  } else {
    imagen = <img src={error} alt={incidencia.estado} />;
  }
  if (incidencia.medio === 0) {
    datoMedio = <strong>su correo electrónico</strong>;
    datoContacto = <strong>{incidencia.correo}</strong>;
  } else {
    datoMedio = <strong>su número de teléfono</strong>;
    datoContacto = <strong>01 {incidencia.telefono}</strong>;
  }
  return (
    <>
      {!loading && (
        <>
          {imagen}
          <h2>
            Hola {incidencia.agraviado}, su {incidencia.tipo} está{" "}
            {incidencia.estado}.
          </h2>
          <p className="alignCenter modd">
            Como parte del Equipo BCP, le comentamos que estamos trabajando en
            conjunto con las diferentes áreas para poder brindarle la atención
            necesaria y la mejor solución a los inconvenientes presentados.
          </p>
          <div className="liwru-msg">
            <p>
              Ten en cuenta que para poder brindar nuestra respuesta tenemos un
              plazo no mayor a treinta (30 días calendario), comunicaremos
              contigo mediante {datoMedio} al {datoContacto} los más pronto
              posible.
            </p>
          </div>
        </>
      )}
    </>
  );
};
