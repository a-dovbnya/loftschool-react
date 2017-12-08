import { handleActions } from "redux-actions";
import {fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from "../actions/followers";
const initialState = {
  isFetching: false,
  isFetched: false,
  error: null,
  data: null
}
export default handleActions(
  {
    [fetchFollowersRequest]: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false,
      error: null,
      ids: null
    }),
    [fetchFollowersSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      ids: action.payload.data,
      error: null
    }),
    [fetchFollowersFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: false,
      error: action.payload
    })
  }, initialState );

export const getFollowers = state => state.followers.ids;
export const getFetching = state => state.followers.isFetching;
export const getError = state => state.followers.error;
