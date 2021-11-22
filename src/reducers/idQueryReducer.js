import { types } from '../types/types';

const initialState = {
    idQuery: ''
}

export const idQueryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setIdQuery:
            return {
                ...state,
                idQuery: action.payload
            }
        case types.clearIdQuery:
            return initialState
        default:
            return state;
    }
}