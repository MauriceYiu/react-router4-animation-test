import React, { Component } from 'react';
import './App.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch ,withRouter} from 'react-router-dom';
import Index from './../containers/index/Index';
import User from './../containers/user/User';
import Desc from './../containers/desc/Desc';

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    console.log(this);
    let pathname = this.props.location.pathname;
    return (
      <div className="App">
      <TransitionGroup>
        <CSSTransition 
                key={pathname}
                classNames="fade"
                timeout={500}>
            <Switch exact>
                <Route path="/" exact component={Index} />
                <Route path="/user" component={User} />
                <Route path="/desc" component={Desc} />
            </Switch>
        </CSSTransition>
      </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);
