import React, {Component} from "react";
import "./Budget.css";

class Budget extends Component{
    render(){
        return (
            <div className="budget">
                <h2>Бюджет</h2>
                <p>Всего получено денег: 323</p>
                <p>Расходы продавцов: -40</p>
                <p>Расходы на ферме: -200</p>
                <p>Расходы на доставку: -40</p>
                <p>Итого: 43</p>
          </div>
        );
    }
}

export default Budget;