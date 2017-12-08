import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../../actions/users';
import usersReducer from '../users';

describe('Редьюсер users', () => {
    describe('Action fetchUserRequest', () => {
        it('Изменяет флаг isFetching', () => {
            const nextState = usersReducer({isFetching: false}, fetchUserRequest());
            expect(nextState.isFetching).toEqual(true);
        });
        it('Изменяет флаг isFetched', () => {
            const nextState = usersReducer({isFetched: true}, fetchUserRequest( { data: { login: "test_user" } }));
            expect(nextState.isFetched).toEqual(false);
        });

        it('Очищает поле data', () => {
            const nextState = usersReducer({data: [{}, {}]}, fetchUserRequest());
            expect(nextState.data).toEqual(null);
        });
        it('Очищает поле error', () => {
            const nextState = usersReducer({error: true}, fetchUserRequest());
            expect(nextState.error).toEqual(null);
        });
    });

    describe('Action fetchUserSuccess', () => {
        it('Изменяет флаг isFetching', () => {
            const nextState = usersReducer({isFetching: true}, fetchUserSuccess({ data: { login: "test_user" }}));
            expect(nextState.isFetching).toEqual(false);
        });
        it('Изменяет флаг isFetched', () => {
            const nextState = usersReducer({isFetched: false}, fetchUserSuccess( { data: { login: "test_user" } }));
            expect(nextState.isFetched).toEqual(true);
        });
        it('Очищает поле error', () => {
            const nextState = usersReducer({error: true}, fetchUserSuccess({ data: { login: "test_user" } }));
            expect(nextState.error).toEqual(null);
        });
        it('Наполняет поле data данными', () => {
            const dataObj = { login: "test_user" };
            const nextState = usersReducer({data: null}, fetchUserSuccess({ data: dataObj }));
            expect(nextState.data).toEqual( dataObj );
        });
    });

    describe('Action fetchUserFailure', () => {
        it('Изменяет флаг isFetching', () => {
            const nextState = usersReducer({isFetching: true}, fetchUserFailure());
            expect(nextState.isFetching).toEqual(false);
        });
        it('Изменяет флаг isFetched', () => {
            const nextState = usersReducer({isFetched: true}, fetchUserFailure( ));
            expect(nextState.isFetched).toEqual(false);
        });
        it('Наполняет error данными', () => {
            const error = new Error('error');
            const nextState = usersReducer({ error: null }, fetchUserFailure(error));
            expect(nextState.error).toEqual(error);
        });
    });
});