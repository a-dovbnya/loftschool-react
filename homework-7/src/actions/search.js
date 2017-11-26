import {createAction} from 'redux-actions';

export const searchRequestAction = createAction('SEARCH_REQUEST', request => request);
export const searchSucessAction = createAction('SEARCH_SUCESS', result => result);
export const searchError = createAction('SEARCH_ERROR');

