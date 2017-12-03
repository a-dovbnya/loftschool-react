import React, {PureComponent} from 'react';
import Followers from "../Followers";
import "./UserPage.css";

class UserPage extends PureComponent {

    componentDidMount(){

    }
    componentWillReceiveProps(){

    }

    render(){
        const src = "img-1.jpg";
        return (
            <div className="user-page">
                <div className="user">
                    <div className="user__ava-box">
                        <img src={src} className="user__ava" alt=""/>
                    </div>
                    <div className="user__info">
                        <h3>dex157</h3>
                        <p>Followers: 26</p>
                        <p>Public repos: 26</p>
                    </div>
                </div>

                <Followers />
            </div>
        );
    }
}

export default UserPage;