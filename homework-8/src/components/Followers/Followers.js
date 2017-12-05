import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import Loader from 'react-svg-spinner';

import {getFollowers, getFetching, getError} from "../../reducers/followers";
import { fetchFollowersRequest } from "../../actions/followers";

import Follower from "../Follower";
import "./Followers.css";

class Followers extends PureComponent {

    componentDidMount() {
        const name = this.props.login;
        this.props.fetchFollowersRequest(fetchFollowersRequest(name));
    }

    render(){
        const { data, isFetching } = this.props;
        
        if(isFetching){
            return (
                <Loader size="70px" gap={4} color="fuchsia"/> 
            );
        }
        
        if (!isFetching && !data) {
            return (<div>Данные не загружены</div>);
        }

        return (
            <div className="follower-wrapp">
                { data.map((follower) => <Follower key={follower.id} followerData={follower} /> )}
            </div>
        );
    }
}

//export default Followers;
const mapStateToProps = state => ({
    data: getFollowers(state),
    isFetching: getFetching(state)
});
const mapDispatchToProps = dispatch => ({
    fetchFollowersRequest: action => dispatch(action),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Followers);