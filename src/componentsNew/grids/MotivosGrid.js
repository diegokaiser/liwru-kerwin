import React, { useState, useEffect } from "react";

export const MotivosGrid = () => {
  const [motivo, setmotivo] = useState([]);

  useEffect(() => {
    getMotivos();
  }, []);

  const getMotivos = async () => {
    const url = "//localhost:9000/api/";
    // const url = "//bcp.liwru.app/pollux/api/";
    const uri = url + "motivos";
    const response = await fetch(uri);
    const data = await response.json();

    const motivos = data.map((motivo) => {
      return {
        id: motivo.idMotivo,
        nombre: motivo.estadoDescripcion,
      };
    });
    setmotivo(motivos);
  };

  return (
    <>
      {motivo.map((m) => (
        <option key={m.id}>{m.nombre}</option>
      ))}
    </>
  );
};
