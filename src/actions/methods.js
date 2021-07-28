export const ADD = "ADD";
export const CLEAR = "CLEAR";
export const TOGGLE = "TOGGLE";


export const AddToList = (text) => {
    return { type: ADD, payload: text}
}