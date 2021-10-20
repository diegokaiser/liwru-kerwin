import React, { useState, useEffect } from "react";

export const DistritosGrid = () => {
  const [distrito, setdistrito] = useState([]);
  useEffect(() => {
    getDistritos();
  }, []);

  const getDistritos = async () => {
    const url = "//localhost:9000/api/";
    // const url = "//bcp.liwru.app/pollux/api/";
    const uri = url + "distritos";
    const response = await fetch(uri);
    const data = await response.json();

    const distritos = data.map((distrito) => {
      return {
        id: distrito.idDistrito,
        nombre: distrito.nombre,
        prov: distrito.idProvincia,
      };
    });
    setdistrito(distritos);
  };

  return (
    <>
      {distrito.map((d) => (
        <option key={d.id}>{d.nombre}</option>
      ))}
    </>
  );
};
