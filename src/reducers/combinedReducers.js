import { combineReducers } from "redux";
import { counterReducer } from "./counter";

export const allReducers = combineReducers({
    counter: counterReducer
})