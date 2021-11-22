import React, { useState, useEffect } from "react";

export const SedesGrid = () => {
  const [sede, setSede] = useState([]);

  useEffect(() => {
    getSedes();
  }, []);

  const getSedes = async () => {
    const url = "//localhost:9000/api/";
    // const url = "//bcp.liwru.app/pollux/api/";
    const uri = url + "sedes";
    const response = await fetch(uri);
    const data = await response.json();

    const sedes = data.map((sede) => {
      return {
        id: sede.idSede,
        nombre: sede.nombre,
      };
    });
    setSede(sedes);
  };

  return (
    <>
      {sede.map((s) => (
        <option key={s.id}>{s.nombre}</option>
      ))}
    </>
  );
};
