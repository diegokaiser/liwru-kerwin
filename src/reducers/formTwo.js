import { types } from "../types/types";

const initialState = {
    typeIncidence       : '',
    reason              : '',
    establishmentType   : '',
    establishment       : '',
    dateIncidence       : '',
    dateAprox           : '',
    docIncidence        : '',
    files               : [],
    detailReclam        : '',
    request             : '',
}

export const formTwo = (state = initialState, action) => {
    switch (action.type) {
        case types.formTwo:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}