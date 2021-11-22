import { useEffect, useState } from "react";
import { getDataIncidencia } from "../helpers/getDataIndicencia";

export const useFetchDataIncidencia = (id) => {
  console.log(id);
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getDataIncidencia(id).then((element) => {
      setState({
        data: element,
        loading: false,
      });
    });
  }, []);

  return state;
};
