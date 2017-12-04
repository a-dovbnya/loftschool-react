import {createActions} from 'redux-actions';

//export const { setToken } = createActions('SET_TOKEN');
export const { authorize, logout } = createActions('AUTHORIZE', 'LOGOUT');
