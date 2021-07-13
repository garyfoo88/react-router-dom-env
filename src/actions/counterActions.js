import { DECREMENT, INCREMENT } from "../constants";

export function increaseCounter() {
    return {
        type: INCREMENT,
    }
}

export function decreaseCounter() {
    return {
        type: DECREMENT,
    }
}