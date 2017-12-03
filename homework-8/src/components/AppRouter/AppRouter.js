import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from '../PrivateRouter';
import Login from '../Login';
import UserPage from '../UserPage';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Route path="/login" exact component={Login} />
          <Redirect to="/user/dex157" />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;