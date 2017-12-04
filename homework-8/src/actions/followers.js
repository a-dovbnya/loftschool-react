import { createActions } from "redux-actions";

export const { fetchUserFollowersRequest, fetchUserFollowersSuccess, fetchUserFollowersFailure } = createActions(
  "FETCH_USER_FOLLOWERS_REQUEST",
  "FETCH_USER_FOLLOWERS_SUCCESS",
  "FETCH_USER_FOLLOWERS_FAILURE"
);