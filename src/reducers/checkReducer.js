import { types } from "../types/types";

const initialState = {
    check: false,
}

export const checkReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.checkTerms:
            return {
                ...state,
                check: action.payload,
            };
        default:
            return state;
    }
}