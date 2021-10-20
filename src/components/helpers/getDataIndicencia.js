export const getDataIncidencia = async (id) => {
  console.log(id);
  const url = `https://liwru-pollux-apis.herokuapp.com/api/incidencias/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const incidencia = {
    agraviado: data.agraviado.clienteNombre,
    tipo: data.tipoIncidencia.descripcion,
    estado: data.estado.estadoDescripcion,
    medio: data.tipoAtencion,
    correo: data.agraviado.clienteEmail,
    telefono: data.agraviado.clienteTelefono,
  };

  return incidencia;
};
