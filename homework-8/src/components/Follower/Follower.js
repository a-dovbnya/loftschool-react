import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import "./Follower.css";

class Follower extends PureComponent {

    render(){
        const follower = {...this.props.followerData};

        return (
            <div className="follower">
                <div className="follower__img-wrapp"><img src={follower.avatar_url} alt={follower.login} className="follower__img"/></div>
                <div className="follower__txt-wrapp">
                    <Link to={`/user/${follower.login}`}><h3>{follower.login}</h3></Link>
                </div>
            </div>
        );
    }
}

export default Follower;