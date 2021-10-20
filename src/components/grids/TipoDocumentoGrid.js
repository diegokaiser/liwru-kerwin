import React, { useState, useEffect } from "react";

export const TipoDocumentoGrid = () => {
  const [tipoDocumento, settipoDocumento] = useState([]);

  useEffect(() => {
    getTipoDocumentos();
  }, []);

  const getTipoDocumentos = async () => {
    const url = "//localhost:9000/api/";
    // const url = "//bcp.liwru.app/pollux/api/";
    const uri = url + "tipos-documentos";
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data);
    console.log(tipoDocumento);
    const tipoDocumentos = data.map((tipoDocumento) => {
      return {
        id: tipoDocumento.idTipoDoc,
        nombre: tipoDocumento.descripcion,
      };
    });
    settipoDocumento(tipoDocumentos);
  };

  return (
    <>
      {tipoDocumento.map((t) => (
        <option key={t.id}>{t.nombre}</option>
      ))}
    </>
  );
};
