import React, { useState, useEffect } from "react";

export const DepartamentosGrid = () => {
  const [departamento, setdepartamento] = useState([]);
  useEffect(() => {
    getDepartamentos();
  }, []);

  const getDepartamentos = async () => {
    const url = "//localhost:9000/api/";
    // const url = "//bcp.liwru.app/pollux/api/";
    const uri = url + "departamentos";
    const response = await fetch(uri);
    const data = await response.json();

    const departamentos = data.map((departamento) => {
      return {
        id: departamento.idDepartamento,
        nombre: departamento.nombre,
      };
    });
    setdepartamento(departamentos);
  };
  return (
    <>
      {departamento.map((d) => (
        <option key={d.id}>{d.nombre}</option>
      ))}
    </>
  );
};
