import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import PrivateRoute from '../PrivateRouter';
import Login from '../Login';
import UserPage from '../UserPage';

import { connect } from "react-redux";
import { getIsAuthorized } from "../../reducers/auth";

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <PrivateRoute path="/user/:name" component={UserPage} />
          { !this.props.isAuthorized && <Route path="/login" exact component={Login} /> }
          <Redirect to="/user/dex157" />
        </Switch>
      </div>
    );
  }
}

//export default AppRouter;
const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default withRouter(connect(mapStateToProps)(AppRouter));