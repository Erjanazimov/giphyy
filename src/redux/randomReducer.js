import {RANDOM_SCROLL} from "./type";


const initialState = {
    dataGiphyRandom: [],

}
export const randomReducer = (state = initialState, action) => {
    switch (action.type){
        case RANDOM_SCROLL:
            return {
                ...state,
                dataGiphyRandom: action.parse
            }
        default:
            return state;
    }
}