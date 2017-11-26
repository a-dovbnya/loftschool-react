import React, {PureComponent} from "react";
import "./Search.css";
import {connect} from "react-redux";
import {searchRequestAction} from "../../actions/search";
import SearchResult from "./SearchResult";

class Search extends PureComponent{
    state = {
        search: ''
    }
    changeHandler = (event) => {
        this.setState({search: event.target.value});
    }
    btnClickHandler = (event) => {
        this.props.searchRequest(searchRequestAction(this.state.search));
    }
    render(){
        const {search} = this.props;
        if(search.error){
            return (<div>Произошла ошибка!</div>);
        }
        return(
            <div>
                <div className="search-wrapp">
                    <input type="text" placeholder="Название Сериала" className="search-area" onChange = {this.changeHandler} value={this.state.search}/>
                    <button className ="search-btn" onClick = {this.btnClickHandler}>Найти</button>
                </div>
                <div className="search">
                    {this.props.search.isFetching ?
                        <div className="search__status">Загрузка...</div>
                    :
                        <div className="search-result">
                            {this.props.search.result.map( (el, index) => (<SearchResult key={el.id} data={el} />))}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({search: state.search});
const mapDispatchToProps = dispatch => ({
    searchRequest: action => dispatch(action) 
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
