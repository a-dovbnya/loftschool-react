import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {authorize} from "../../actions/auth";
import { Redirect } from 'react-router-dom';

import './Login.css';

class Login extends PureComponent{

    keydownHandler = (e) => {
        if(e.keyCode === 13){
            const token = e.target.value;
            console.log("Отправляем action");
            this.props.authorize(authorize(token));

        }
    }

    render(){
        if (this.props.token) {
            return <Redirect to="/user/dex157" />;
        }
        return(
            <div className="loginWrapp">
                <div className="login">
                    <p>Получить токен нужно на своей странице github, перейдите по  
                        <a href="https://github.com/settings/tokens"> адресу</a> и создать себе токен. 
                        Запишите куда нибудь токен, так как после создания доступ к нему будет только один раз.
                    </p>
                    <input className="login__area" 
                            placeholder="auth_token" 
                            onKeyDown={this.keydownHandler}
                    />
                    <p>После ввода нажать Enter</p>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({auth: state.auth});
const mapDispatchToProps = dispatch => ({
    authorize: auth => dispatch(auth) 
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);