import {fetchFollowersSuccess, fetchFollowersFailure} from '../../actions/followers';
import {call, put} from 'redux-saga/effects';
import {fetchFollowersSaga} from '../followers';
import {getUserFollowers} from '../../api';

describe('Saga followers:', () => {
  it('call getUserFollowers', () => {
    const action = {payload: 'test_user'};
    const saga = fetchFollowersSaga(action);
    expect(saga.next().value).toEqual(call(getUserFollowers, 'test_user'));
  });

  it('Должен отправляться экшен fetchFollowersSuccess с followers', () => {
    const action = { payload: 'test_user' };
    const saga = fetchFollowersSaga(action);
    const followers = [{ id: 1, name: 'test_user' }];
    const follower = { user: followers };
    saga.next();
    expect(saga.next(followers).value).toEqual(
      put(fetchFollowersSuccess(follower.user)),
    );
  });

  it('если произошла ошибка, должен отправляться экшен fetchUserFailure с ошибкой', () => {
    const action = { payload: 'test_user' };
    const error = new Error('test error');
    const saga = fetchFollowersSaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(put(fetchFollowersFailure(error)));
  });
});
