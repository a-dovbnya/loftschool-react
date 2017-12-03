import {handleActions} from 'redux-actions';
import {setToken} from "../actions/auth"

const initiaState = {
    token: null
}

export default handleActions({
    [setToken]: (state, action) => ({...state, token: action.payload})
}, initiaState);

export const getToken = state => state.auth.token;
export const getIsAuthorized = state => false;
//export const getIsAuthorized = state => state.auth.IsAuthorized;
/*export default (state=initiaState, action) => {
    [setToken]: (action, payload) => ({})
    return state;
}*/