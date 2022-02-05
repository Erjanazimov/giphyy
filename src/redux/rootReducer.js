import {combineReducers} from "redux";
import {scrollReducer} from "./scrollReducer";
import {randomReducer} from "./randomReducer";

export const rootReducer = combineReducers({
    scrollReducer,
    randomReducer
})