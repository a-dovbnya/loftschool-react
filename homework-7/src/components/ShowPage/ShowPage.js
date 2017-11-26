import React, {PureComponent} from "react";
import "./Show.css";
import {connect} from "react-redux";
import {showRequestAction} from "../../actions/show";
import ShowPageMarkup from "./ShowPageMarkup";

class ShowPage extends PureComponent{
    state = {
        itemId: null
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.setState({itemId: parseInt(id,10)});
       
        const entities = this.props.shows.entities;
        const showItem = entities.find( el => parseInt(el.id, 10) === this.state.itemId );
        if( !showItem ){
            this.props.showRequest(showRequestAction(id));
        }

    }
    render(){
        
        const {entities, isFetching} = this.props.shows;
        const showItem = entities.find( el => parseInt(el.id, 10) === this.state.itemId );

        if(isFetching){
            return (<div className = "show-loading">Идет загрузка</div>);
        }
        if(showItem){
            return(<ShowPageMarkup showItem = {showItem}/>);
        }
        return (<div>Произошла ошибка...</div>);
    }
}

const mapStateToProps = state => ({shows: state.shows});
const mapDispatchToProps = dispatch => ({
    showRequest: action => dispatch(action) 
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);