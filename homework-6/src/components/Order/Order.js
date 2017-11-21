import React, {Component} from "react";
import "./Order.css";

class Order extends Component{
    
    render(){
        const {title, price, date} = this.props;
        return (
            <div className="order">
                <div className="order__upper">
                    
                    <p className="p--order">Название: {title}</p>
                    <p className="p--order">Цена: {price}</p>
                </div>
                <div className="order__lower">
                    { date ?
                    <p className="p--order">Создан: {date.toLocaleString()}</p>
                    :
                    null
                    }
                </div>
            </div>
        );
    }
}

export default Order;