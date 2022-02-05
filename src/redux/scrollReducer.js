import { SCROLL_STATE} from "./type";


const initialState = {
    dataGiphy: [],
    current: 5,
    load: true
}

export const scrollReducer = (state = initialState, action) => {
    switch (action.type){
        case SCROLL_STATE:
            return {
                ...state,
                dataGiphy: action.data
            }

        default:
            return state;
    }
}