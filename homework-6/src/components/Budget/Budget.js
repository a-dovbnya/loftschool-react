import React, {Component} from "react";
import {connect} from "react-redux";
import "./Budget.css";

class Budget extends Component{
    render(){
        const {deliveryExpanse, farmExpanse, marketExpanse, profit} = this.props.budget;
        return (
            <div className="budget">
                <h2>Бюджет</h2>
                <p>Всего получено денег: {profit}</p>
                <p>
                    Расходы продавцов: { marketExpanse===0 ? 0 : '-' + marketExpanse}
                </p>
                <p>
                    Расходы на ферме: {farmExpanse === 0 ? 0 : '-'+farmExpanse}
                </p>
                <p>
                    Расходы на доставку: {deliveryExpanse === 0 ? 0 : '-'+deliveryExpanse}
                </p>
                <p>
                    Итого: {profit - marketExpanse - farmExpanse - deliveryExpanse}
                </p>
          </div>
        );
    }
}

const mapStateToProps = state => ({budget: state.budget});

export default connect (mapStateToProps)(Budget);