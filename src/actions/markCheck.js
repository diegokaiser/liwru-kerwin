import { types } from "../types/types";

export const check = (data) => {
    return {
        type: types.checkTerms,
        payload: data
    }
}