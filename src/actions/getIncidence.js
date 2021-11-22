// import { useFetchDataIncidencia } from "../hooks/useFetchDataIncidencia";
import { types } from "../types/types";

export const getIncidence = () => {

    return async (dispatch,getState) => {
        const { idQuery } = getState().idQuery;
        const url = `https://liwru-pollux-apis.herokuapp.com/api/incidencias/${idQuery}`;
        const response = await fetch(url);
        const data = await response.json();
        const incidence = {
            agraviado: data.agraviado.clienteNombre,
            tipo: data.tipoIncidencia.descripcion,
            estado: data.estado.estadoDescripcion,
            medio: data.tipoAtencion,
            correo: data.agraviado.clienteEmail,
            telefono: data.agraviado.clienteTelefono,
        };
        dispatch(setIncidence(incidence))
    }

};
export const setIncidence = (incidence) => {
    return{
        type:types.getIncidence,
        payload:incidence
    }
}
export const resetIncidenceValues = () => {
    return{
        type:types.resetIncidence,
    }
}