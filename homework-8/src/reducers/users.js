import { handleActions } from "redux-actions";
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "../actions/users";

export default handleActions(
  {
    [fetchUserRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      error: false,
      data: null
    }),
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
  }
);

export const getData = state => state.users.data;
export const getFetching = state => state.users.isFetching;
export const getError = state => state.users.error;