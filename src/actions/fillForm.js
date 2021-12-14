import { useSelector } from "react-redux";
import { types } from "../types/types";

export const fillFormOne = (data) => {
    return {
        type: types.formOne ,
        payload: data
    }
}
export const fillFormTwo = (data) => {
    return {
        type: types.formTwo ,
        payload: data
    }
}