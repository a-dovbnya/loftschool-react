import React, {Component} from "react";
import "./Search.css";
import {connect} from "react-redux";
import {searchRequestAction, searchSucessAction} from "../../actions/search";

class Search extends Component{
    state = {
        search: ''
    }
    changeHandler = (event) => {
        this.setState({search: event.target.value});
    }
    btnClickHandler = (event) => {
        // Посылаем action, дальше сам запрос в middleware
        this.props.searchRequestAction();
    }
    render(){
        return(
            
            <div className="search-wrapp">
                <input type="text" placeholder="Название Сериала" className="search-area" onChange = {this.changeHandler} value={this.state.search}/>
                <button className ="search-btn" onClick = {this.btnClickHandler}>Найти</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({store: state});
const mapDispatchToProps = dispatch => ({
    searchRequestAction: () => dispatch(searchRequestAction()) 
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
