import {authorize, logout} from '../actions/auth';
import {take, put, call, select} from 'redux-saga/effects';
import {setTokenApi, clearTokenApi} from '../api';
import {getIsAuthorized} from '../reducers/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage,
} from '../localStorage';

//----------------------
import {setToken} from '../actions/auth';
import {takeLatest} from 'redux-saga/effects';

export function* authFlow() {

  console.log("authFlow");
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;

    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken;
        yield put(authorize());
      } else {
        const action = yield take(authorize);
        token = action.payload;
      }
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}


/*function setTokenSaga(action) {
  console.log("in saga");
  setTokenApi(action.payload);
}
export function* setTokenWatch() {
  yield takeLatest(setToken, setTokenSaga);
}*/
