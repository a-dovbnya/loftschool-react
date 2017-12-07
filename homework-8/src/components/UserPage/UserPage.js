import React, {PureComponent} from 'react';
import Followers from "../Followers";
import {connect} from "react-redux";
import {getUsers, getFetching, getError} from "../../reducers/users";
import { logout } from "../../actions/auth";
import { fetchUserRequest, fetchTokenOwnerRequest } from "../../actions/users";
import Loader from 'react-svg-spinner';
import "./UserPage.css";

export class UserPage extends PureComponent {

    componentDidMount() {
        const name = this.props.match.params.name;
        if (name) {
            this.props.fetchUserRequest(fetchUserRequest(name));
        }else{
            this.props.fetchTokenOwnerRequest(fetchTokenOwnerRequest());
        }

        
    }
    componentWillReceiveProps(nextProps) {
        const currentName = this.props.match.params.name;
        const nextName = nextProps.match.params.name;

        if (currentName !== nextName ) {
            if(nextName !== undefined){
                this.props.fetchUserRequest(fetchUserRequest(nextName));
            }
        }
    }
    appLogout = () => {
        this.props.logout(logout());
    };

    render(){

        const { user, isFetching } = this.props;

        if(isFetching){
            return (
                <div className="user-page">
                    <div className="user-page__panel">
                        <button onClick={this.appLogout} className="user-page__button">Exit</button>
                    </div>
                    <div className="user">
                        <Loader size="70px" gap={4} color="fuchsia"/> 
                    </div>
                </div>
            );
        }

        if (!isFetching && !user) {
            return (<div className="error-msg">Данные не загружены</div>);
        }

        return (
            
            <div className="user-page">
                <div className="user-page__panel">
                    <button onClick={this.appLogout} className="user-page__button">Exit</button>
                </div>
    
                <div className="user">
                    <div className="user__ava-box">
                        <img src={user.avatar_url} className="user__ava" alt={user.login}/>
                    </div>
                    <div className="user__info">
                        <h3 className="user__login">{user.login}</h3>
                        <p className="user__followers">Followers: {user.followers}</p>
                        <p className="user__repos">Public repos: {user.public_repos}</p>
                    </div>
                </div>
                <Followers login={user.login}/>
                
            </div>
        );
    }
}

//export default UserPage;
const mapStateToProps = state => ({
    user: getUsers(state),
    isFetching: getFetching(state)
});
const mapDispatchToProps = dispatch => ({
    fetchUserRequest: action => dispatch(action),
    fetchTokenOwnerRequest: action => dispatch(action),
    logout: action => dispatch(action)
});
  
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);