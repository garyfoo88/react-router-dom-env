import { createStore } from "redux";
import { allReducers } from "./reducers/combinedReducers";

export const store = createStore(allReducers);
