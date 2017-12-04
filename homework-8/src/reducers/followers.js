import { handleActions } from "redux-actions";
import {
  fetchUserFollowersRequest,
  fetchUserFollowersSuccess,
  fetchUserFollowersFailure
} from "../actions/followers";

export default handleActions(
  {
    [fetchUserFollowersRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      error: false,
      data: null
    }),
    [fetchUserFollowersSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      data: action.payload.data,
      error: false
    }),
    [fetchUserFollowersFailure]: (state, action) => ({
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
