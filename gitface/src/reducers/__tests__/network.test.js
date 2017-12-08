import { clearNetworkErrors, networkError } from '../../actions/network';
import networkReducer from '../network';

describe('Редьюсер network', () => {

    it('очищает поле error, если приходит экшен clearNetworkErrors', () => {
      const error = { response: { data: { message: 'error' } } };
      const nextState = networkReducer({ error }, clearNetworkErrors());
      expect(nextState.error).toEqual(null);
    });

    it('наполняет данными error, если приходит экшен networkError', () => {
      const error = { response: { data: { message: 'error' } } };
      const nextState = networkReducer(
        { error: null, message: null },
        networkError(error),
      );
      expect(nextState.error).toEqual(error);
    });


    it('очищает поле message, если приходит экшен clearNetworkErrors', () => {
      const nextState = networkReducer(
        { message: 'error' },
        clearNetworkErrors(),
      );
      expect(nextState.message).toEqual(null);
    });

    it('наполняет данными message, если приходит экшен networkError', () => {
      const msg = 'error';
      const error = { response: { data: { message: msg } } };
      const nextState = networkReducer(
        { error: null, message: null },
        networkError(error),
      );
      expect(nextState.message).toEqual(msg);
    });

});
