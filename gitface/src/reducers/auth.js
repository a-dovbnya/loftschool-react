import {handleActions} from 'redux-actions';
//import {setToken} from "../actions/auth"
import {authorize, logout} from "../actions/auth";

const initiaState = {
    token: null,
    isAutorized: false
}

export default handleActions({
    //[setToken]: (state, action) => ({...state, token: action.payload})
    [authorize]: (state, action) => ({
        ...state, 
        isAutorized: true
    }),
    [logout]: (state, action) => ({
        ...state,
        isAutorized: false
    })
}, initiaState);

export const getToken = state => state.auth.token;
export const getIsAuthorized = state => state.auth.isAutorized;
//export const getIsAuthorized = state => state.auth.IsAuthorized;
/*export default (state=initiaState, action) => {
    [setToken]: (action, payload) => ({})
    return state;
}*/