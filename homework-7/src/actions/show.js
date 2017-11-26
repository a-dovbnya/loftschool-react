import {createAction} from 'redux-actions';

export const showRequestAction = createAction('SHOW_REQUEST', id => id);
export const showSucessAction = createAction('SHOW_SUCESS', result => result);
export const showErrorAction = createAction('SHOW_ERROR');
