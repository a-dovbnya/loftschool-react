import {show} from "../api.js";
import {showRequestAction, showSucessAction, showErrorAction} from "../actions/show";

export default  (store) => next => action => {
    let returnValue = next(action);

    if(action.type === showRequestAction.toString() ){
        show(action.payload)
        .then(
            (data) => store.dispatch(showSucessAction(data))
        )
        .catch(
            () => store.dispatch(showErrorAction())
        );
    }

    return returnValue;
};