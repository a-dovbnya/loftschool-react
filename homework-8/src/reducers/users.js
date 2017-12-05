import { handleActions } from "redux-actions";
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "../actions/users";

const initialState = {
  isFetching: false,
  data: null,
  error: false
}

export default handleActions(
  {
    [fetchUserRequest]: (state, action) => { console.log("action = ", action); return({
      ...state,
      isFetching: true,
      error: false,
      data: null
    })},
    [fetchUserSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      data: action.payload.data,
      error: false
    }),
    [fetchUserFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      error: true,
      data: null
    })
  },
  {
    isFetching: false,
    error: false
  }, initialState);

export const getUsers = state => state.users.data;
export const getFetching = state => state.users.isFetching;
export const getError = state => state.users.error;