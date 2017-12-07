import { call, put, select } from 'redux-saga/effects';

import requestSaga from '../request';
import { fetchFollowersSuccess } from '../../actions/followers';
import { getIsNetworkErrorPresent } from '../../reducers/network';
import { clearNetworkErrors, networkError } from '../../actions/network';
import { logout } from '../../actions/auth';

describe('Сага request', () => {
  const followers = [{}];
  const saga = requestSaga(fetchFollowersSuccess, followers);


    it('Эффект call(fn, args)', () => {
      expect(saga.next().value).toEqual(call(fetchFollowersSuccess, followers));
    });

    it('Эффект select getIsNetworkErrorPresent', () => {
      expect(saga.next().value).toEqual(select(getIsNetworkErrorPresent));
    });

    it('Эффект put clearNetworkErrors', () => {
      expect(saga.next(true).value).toEqual(put(clearNetworkErrors()));
    });



    it('Эффект put networkError', () => {
      const error = { response: { status: 401 } };
      expect(saga.throw(error).value).toEqual(put(networkError(error)));
    });

    it('Эффект put logout', () => {
      expect(saga.next().value).toEqual(put(logout()));
    });


});