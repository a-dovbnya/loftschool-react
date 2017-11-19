import React, {Component} from 'react';
import './App.css';
import {addListener, removeListener, isAuthorized} from './AuthorizeApi';
import {Link, Route, Switch, Redirect} from "react-router-dom";
import Private from "./Private";
import Public from "./Public";
import Home from "./Home";
import Auth from "./Auth";

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({isAuthorized});
  };

  render() {
    const {isAuthorized} = this.state;
  
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/auth">Войти</Link></li>
            <li><Link to="/private">Секретная страница</Link></li>
            <li><Link to="/public">Публичная страница</Link></li>
            <li><Link to="/">Главная</Link></li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/auth" component={Auth}/>

          {
            isAuthorized ? 
            <Route path="/private" component={Private} />
            :
            <Redirect from="/private" to="/auth" />
          }

            <Route path="/public" component={Public} />
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          
        </Switch>
      
      </div>
 
    );
  }
}

export default App;
