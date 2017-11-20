import React, {Component} from 'react';
import './Market.css';
import {createOrder, moveOrderToFarm} from '../../actions/marketActions';
import Order from '../Order/Order';

import {connect} from 'react-redux';

let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  // testMethod
  newOrderHandle = () => {
    const order = getNewOrder();
    this.props.createOrder(order);
  }
  moveToFarmHandle = () => {
    const order = this.props.orders[this.props.orders.length - 1];
    this.props.moveOrderToFarm(order);
  }
  render() {
    console.log(this.props);
    const {orders} = this.props;
    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button className="new-orders__create-button" onClick = {this.newOrderHandle}>Создать заказ</button>
        <button disabled="" onClick = {this.moveToFarmHandle}>Отправить заказ на ферму</button>
        <div className="order-list">
          {orders.map( order => <Order key={order.id} title={order.name} price={order.price} date={order.createdAt} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({orders: state.market.orders});

const mapDispatchToProps = dispatch => ({
    createOrder: order => dispatch(createOrder(order)),
    moveOrderToFarm: order => dispatch(moveOrderToFarm(order))
});


export default connect(mapStateToProps, mapDispatchToProps)(Market);
