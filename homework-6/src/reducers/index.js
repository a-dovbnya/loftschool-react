
import { combineReducers } from 'redux';
import market from './market';
import farm from './farm';
import budget from './budget';

export default combineReducers({
  market, // => market: market(state.market, action)
  farm, // => farm: farm(state.farm, action)
  budget, // => budget: budget(state.budget, action)
});
/*export default (state = {},) => {
    return state

}*/