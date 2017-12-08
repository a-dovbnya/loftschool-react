import { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from '../../actions/followers';
import followersReducer from '../followers';

describe('Редьюсер users', () => {
    describe('Action fetchFollowersRequest', () => {
        it('Изменяет флаг isFetching', () => {
            const nextState = followersReducer({isFetching: false}, fetchFollowersRequest());
            expect(nextState.isFetching).toEqual(true);
        });
        it('Изменяет флаг isFetched', () => {
            const nextState = followersReducer({isFetched: true}, fetchFollowersRequest());
            expect(nextState.isFetched).toEqual(false);
        });
        it('Очищает поле error', () => {
            const nextState = followersReducer({error: true}, fetchFollowersRequest());
            expect(nextState.error).toEqual(null);
        });
        it('Очищает поле ids', () => {
            const nextState = followersReducer({ids: [{}, {}]}, fetchFollowersRequest());
            expect(nextState.ids).toEqual(null);
        });
        
    });

    describe('Action fetchFollowersSuccess', () => {
        it('Изменяет флаг isFetching', () => {
            const nextState = followersReducer({isFetching: true}, fetchFollowersSuccess({ data: { login: "test_user" }}));
            expect(nextState.isFetching).toEqual(false);
        });
        it('Изменяет флаг isFetched', () => {
            const nextState = followersReducer({isFetched: false}, fetchFollowersSuccess( { data: { login: "test_user" } }));
            expect(nextState.isFetched).toEqual(true);
        });
        it('Очищает поле error', () => {
            const nextState = followersReducer({error: true},fetchFollowersSuccess({ data: { login: "test_user" } }));
            expect(nextState.error).toEqual(null);
        });
        it('Наполняет поле ids данными', () => {
            const followers = [{}, {}];
            const nextState = followersReducer({ ids: null }, fetchFollowersSuccess({ data:followers} ));
            expect(nextState.ids).toEqual(followers);
        });
    
    });

    describe('Action fetchFollowersFailure', () => {
        it('Изменяет флаг isFetching', () => {
            const nextState = followersReducer({isFetching: true}, fetchFollowersFailure());
            expect(nextState.isFetching).toEqual(false);
        });
        it('Изменяет флаг isFetched', () => {
            const nextState = followersReducer({isFetched: true}, fetchFollowersFailure( ));
            expect(nextState.isFetched).toEqual(false);
        });
        it('Наполняет error данными', () => {
            const error = new Error('error');
            const nextState = followersReducer({ error: null }, fetchFollowersFailure(error));
            expect(nextState.error).toEqual(error);
        });
    });
});