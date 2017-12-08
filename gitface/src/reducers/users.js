import { handleActions } from "redux-actions";
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "../actions/users";
import { logout } from '../actions/auth';

const initialState = {
  isFetching: false,
  isFetched: false,
  data: null,
  error: null
}

export default handleActions(
  {
    [fetchUserRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false,
      error: null,
      data: null
    }),
    [fetchUserSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      data: action.payload.data,
      error: null
    }),
    [fetchUserFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: false,
      error: action.payload,
      data: null
    })
  }, initialState);

export const getUsers = state => state.users.data;
export const getFetching = state => state.users.isFetching;
export const getIsFetched = state => state.users.isFetched;
export const getError = state => state.users.error;