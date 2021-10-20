import React, { useState, useEffect } from "react";

export const ProvinciasGrid = () => {
  const [provincia, setProvincia] = useState([]);
  useEffect(() => {
    getProvincias();
  }, []);

  const getProvincias = async () => {
    const url = "//localhost:9000/api/";
    // const url = "//bcp.liwru.app/pollux/api/";
    const uri = url + "provincias";
    const response = await fetch(uri);
    const data = await response.json();

    const provincias = data.map((provincia) => {
      return {
        id: provincia.idProvincia,
        nombre: provincia.nombre,
        dpto: provincia.idDepartamento,
      };
    });
    setProvincia(provincias);
  };

  return (
    <>
      {provincia.map((p) => (
        <option key={p.id}>{p.nombre}</option>
      ))}
    </>
  );
};
