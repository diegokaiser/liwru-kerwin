import { types } from '../types/types';

const initialState = {
    incidence: {},
    loading:true
}

export const incidenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getIncidence:
            return {
                ...state,
                incidence: action.payload,
                loading: false
            }
        case types.resetIncidence:
            return initialState
        default:
            return state;
    }
}