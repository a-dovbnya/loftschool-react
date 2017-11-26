
import {handleActions} from 'redux-actions';
import {searchRequestAction, searchSucessAction, searchError} from "../actions/search"

const initialState = {
    isFetching: false,
    result: [],
    error: null
}

export default handleActions({
    [searchRequestAction]: (state, action) => ({...state, isFetching: true}), 
    [searchSucessAction]: (state, action) => ({...state, isFetching: false, result: action.payload}),
    [searchError]: (state, action) => ({...state, error: true})
}, initialState);
