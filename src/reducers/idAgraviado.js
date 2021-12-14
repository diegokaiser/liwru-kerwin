import { types } from "../types/types";

const initialState = {
    idAgra       : '',
}

export const idAgraviado = (state = initialState, action) => {
  console.log('aqui pes con el ',action)
    switch (action.type) {
        case types.idAgr:
            return {
                ...state,
                idAgra: action.payload,
            };
        default:
          return state
    }
}