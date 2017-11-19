import React, {Component} from 'react';
import {isAuthorized, authorizeUser} from './AuthorizeApi';
import { Redirect} from "react-router-dom";


class Auth extends Component {

  state = {
    email: '',
    password: '',
    error: false,
    isAuthorized: isAuthorized
  }

  changeHandler = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = () => {
    const {email, password} = this.state;
    const error = authorizeUser(email, password);

    this.setState({error: !error, isAuthorized: error});
  }
  render() {
  
    const {error, isAuthorized, email, password} = this.state;

    return (
      <div>
      { !isAuthorized ? 
        <div>
          <div>
            <input onChange = {this.changeHandler} value = {email} name="email" placeholder="email"/>
            <input onChange = {this.changeHandler} value = {password} name="password" placeholder="password"/>
            { error && <p className="error">Неверный пароль и/или почта.</p>}
          </div>
          <button onClick = {this.handleSubmit}>Submit</button>
        </div>
        :
        <Redirect from="auth" to="/"/>
      }
      </div>
    )
    ;
  }
}

export default Auth;
