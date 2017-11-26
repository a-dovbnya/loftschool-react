
import {handleActions} from 'redux-actions';
import {showRequestAction, showSucessAction, showErrorAction} from "../actions/show";

const initialState = {
    entities: [],
    isFetching: false,
    error: false
}
export default handleActions({
    [showRequestAction]: (state, action) => ({...state, isFetching:true}),
    [showSucessAction]: (state, action) => ({...state, isFetching: false, entities: [...state.entities, action.payload]}),
    [showErrorAction]: (state, action) => ({...state, error: true})
}, initialState);
