import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

export default function farmReducer(state = {orders: []}, action) {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:{
      let orders;
      (state.hasOwnProperty('orders')) ?  orders = [...state.orders] : orders = [];
      return { 
          ...state, 
          orders: [...orders, action.payload]
        };
      }
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload.id)
      };
    default:
      return state;
  }
}
