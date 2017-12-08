import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import PrivateRoute from '../PrivateRouter';
import Login from '../Login';
import UserPage from '../UserPage';

import { connect } from "react-redux";
import { getIsAuthorized } from "../../reducers/auth";
import { getNetworkError } from '../../reducers/network';

import { logout } from "../../actions/auth";

export class AppRouter extends Component {

  appLogout = () => {
    this.props.logout(logout());
  };
  render() {
    const { networkError, isAuthorized } = this.props;

    return (
    
      <div>
        { networkError ? 
          <p className="networkError">Ошибка: {networkError}</p>
        :
          <div className="App">
            <div className="user-page__panel">
              <button onClick={this.appLogout} className="user-page__button">Exit</button>
            </div>
            <Switch>
              <PrivateRoute path="/user/me" exact component={UserPage} />
              <PrivateRoute path="/user/:name" component={UserPage} />
              { !this.props.isAuthorized && <Route path="/login" exact component={Login} /> }
              <Redirect to="/user/me" />
            </Switch>
          </div>
        }
      </div>
    );
  }
}

//export default AppRouter;
const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  networkError: getNetworkError(state)
});
const mapDispatchToProps = dispatch => ({
  logout: action => dispatch(action)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));