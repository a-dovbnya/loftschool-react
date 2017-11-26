import {search} from "../api.js";
import {searchRequestAction, searchSucessAction, searchError} from "../actions/search";

export default  (store) => next => action => {
    let returnValue = next(action);

    if(action.type === searchRequestAction.toString()){
        search(action.payload)
        .then(
            (data) => store.dispatch(searchSucessAction(data))
        )
        .catch(
            (data) => store.dispatch(searchError())
        );
    }

    return returnValue;
};