import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../../actions/users';
import usersReducer from '../users';

describe('Редьюсер users', () => {
    describe('Action fetchUserRequest', () => {
        it('Изменяет флаг isFetching', () => {
            const nextState = usersReducer({isFetching: false}, fetchUserRequest(),);
            expect(nextState.isFetching).toEqual(true);
        });
    });
});