import React, {Component} from "react";
import Market from "../Market";
import Budget from "../Budget";
import Farm from "../Farm";
import "./App.css";

class App extends Component{
    render(){
        return (
        <div className="app">
            <Market />
            <Farm />
            <Budget />
        </div>
        );
    }
}

export default App;