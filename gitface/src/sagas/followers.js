import { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from "../actions/followers";
import { takeLatest, call, put } from "redux-saga/effects";
import { getUserFollowers } from "../api";

export function* fetchFollowersSaga({ payload }) {
  try {
    const followersData = yield call(getUserFollowers, payload);
    yield put(fetchFollowersSuccess(followersData));
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

export function* fetchFollowersWatch() {
    yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
}
  