import {SEARCH_REQUEST, SEARCH_SUCESS} from "../actions/searchTypes";

const initialState = {
    isFetching: false,
    result: [],
    error: null
}
export default function (state=initialState, action) {

    switch(action.type){
        case SEARCH_REQUEST: {
            return {...state, isFetching: true}
        }
        case SEARCH_SUCESS: {
            return state;
        }
        default: return state;
    }

}