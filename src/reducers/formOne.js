import { types } from "../types/types";


const initialState = {
    name        : '',
    aPaterno    : '',
    aMaterno    : '',
    typeDocument: '',
    dni         : '',
    email       : '',
    typeResponse: '',
    direction   : '',
    phone       : '',
    department  : '',
    province    : '',
    district    : ''
}

export const formOne = (state = initialState, action) => {
    switch (action.type) {
        case types.formOne:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}