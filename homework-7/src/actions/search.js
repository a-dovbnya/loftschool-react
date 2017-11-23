import {SEARCH_REQUEST, SEARCH_SUCESS} from "./searchTypes";

export function searchRequestAction() {
    return {
        type: SEARCH_REQUEST
    }
};

export function searchSucessAction(result) {
    return {
        type: SEARCH_SUCESS,
        payload: result
    }
};


