import React, {Component} from "react";
import "./Farm.css";

class Farm extends Component{
    render(){
        return (
            <div className="farm">
                <h2>Производство на ферме</h2>
                <button disabled="">Отправить урожай клиенту</button>
                <div></div>
          </div>
        );
    }
}

export default Farm;