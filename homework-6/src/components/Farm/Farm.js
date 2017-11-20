import React, {Component} from "react";
import "./Farm.css";
import {connect} from 'react-redux';
import Order from '../Order/Order';
import { moveOrderToCustomer } from '../../actions/farmActions';

class Farm extends Component{
    moveOrderHandle = () => {
        const order = this.props.orders[this.props.orders.length - 1];
        this.props.moveOrderToCustomer(order);
    }
    
    render(){
        const {orders} = this.props;
        console.log("Orders = ", orders);
        return (
            <div className="farm">
                <h2>Производство на ферме</h2>
                <button disabled="" onClick={this.moveOrderHandle}>Отправить урожай клиенту</button>
                <div className="order-list">
                    {orders.map( order => <Order key={order.id} title={order.name} price={order.price} date={order.createdAt} />)}
                </div>
          </div>
        );
    }
}

//export default Farm;
const mapStateToProps = state => ({orders: state.farm.orders});

const mapDispatchToProps = dispatch => ({
    moveOrderToCustomer: order => dispatch(moveOrderToCustomer(order)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Farm);