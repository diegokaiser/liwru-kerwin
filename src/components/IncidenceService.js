import React from "react";
import alarm from "../assets/images/alarm.svg";
import success from "../assets/images/success.svg";
import error from "../assets/images/error.svg";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";


export const IncidenceService = () => {
  
  const { incidence,loading } = useSelector(state => state.incidenceData)
  console.log(incidence)

  let imagen;
  let datoMedio;
  let datoContacto;
  if (incidence.estado === "En proceso" || incidence.estado === "Recibidas") {
    imagen = <img src={alarm} alt={incidence.estado} />;
  } else if (incidence.estado === "Resuelta") {
    imagen = <img src={success} alt={incidence.estado} />;
  } else {
    imagen = <img src={error} alt={incidence.estado} />;
  }
  if (incidence.medio === 0) {
    datoMedio = <strong>su correo electrónico</strong>;
    datoContacto = <strong>{incidence.correo}</strong>;
  } else {
    datoMedio = <strong>su número de teléfono</strong>;
    datoContacto = <strong>01 {incidence.telefono}</strong>;
  }

  return (
    <>
      {
        !loading 
          ?
          (
            <>
              {imagen}
              <h2>
                Hola {incidence.agraviado}, su {incidence.tipo} está{" "}
                {incidence.estado}.
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
          ) 
          :(
            <Loader
              className="loader"
              type="MutatingDots"
              color="#cc6000"
              height={100}
              width={100}
              secondaryColor="#85c2ff"
            />
          )
        }
    </>
  )
};
