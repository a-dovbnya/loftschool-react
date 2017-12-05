import React, {PureComponent} from 'react';
import Followers from "../Followers";
import {connect} from "react-redux";
import {getUsers, getFetching, getError} from "../../reducers/users";
import { logout } from "../../actions/auth";
import { fetchUserRequest } from "../../actions/users";
import Loader from 'react-svg-spinner';
import "./UserPage.css";

class UserPage extends PureComponent {

    componentDidMount() {
        const name = this.props.match.params.name;
        this.props.fetchUserRequest(fetchUserRequest(name));
    }
    componentWillReceiveProps(nextProps) {
        const currentName = this.props.match.params.name;
        const nextName = nextProps.match.params.name;

        if (currentName !== nextName) {
            this.props.fetchUserRequest(fetchUserRequest(nextName));
        }
    }
    appLogout = () => {
        this.props.logout(logout());
    };

    render(){

        const { data, isFetching } = this.props;

        if(isFetching){
            return (
                <div className="user-page">
                    <Loader size="70px" gap={4} color="fuchsia"/> 
                </div>
            );
        }

        if (!isFetching && !data) {
            return (<div>Данные не загружены</div>);
        }

        return (
            
            <div className="user-page">
                <div className="user-page__panel">
                    <button onClick={this.appLogout} className="user-page__button">Exit</button>
                </div>
    
                <div className="user">
                    <div className="user__ava-box">
                        <img src={data.avatar_url} className="user__ava" alt={data.login}/>
                    </div>
                    <div className="user__info">
                        <h3>{data.login}</h3>
                        <p>Followers: {data.followers}</p>
                        <p>Public repos: {data.public_repos}</p>
                    </div>
                </div>
                <Followers login={data.login}/>
                
            </div>
        );
    }
}

//export default UserPage;
const mapStateToProps = state => ({
    data: getUsers(state),
    isFetching: getFetching(state)
});
const mapDispatchToProps = dispatch => ({
    fetchUserRequest: action => dispatch(action),
    logout: action => dispatch(action)
});
  
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);