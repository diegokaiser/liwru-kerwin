import { types } from "../types/types";

export const idQuery = (id) => {
    return{
        type: types.setIdQuery,
        payload: id,
    }
};

export const clearIdQuery = () => {
    return{
        type: types.clearIdQuery,
    }
};