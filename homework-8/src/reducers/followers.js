import { handleActions } from "redux-actions";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../actions/followers";

export default handleActions(
  {
    [fetchFollowersRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      error: false,
      data: null
    }),
    [fetchFollowersSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      data: action.payload.data,
      error: false
    }),
    [fetchFollowersFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      error: true
    })
  },
  {
    isFetching: false,
    error: false,
    data: null
  }
);

export const getFollowers = state => state.followers.data;
export const getFetching = state => state.followers.isFetching;
export const getError = state => state.followers.error;
