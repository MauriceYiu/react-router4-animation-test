import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './../containers/index/Index';
import User from './../containers/user/User';
import Desc from './../containers/desc/Desc';

class RouteMap extends Component {
    render() {
        return (
            <Switch exact>
                <Route path="/" exact component={Index} />
                <Route path="/user" component={User} />
                <Route path="/desc" component={Desc} />
            </Switch>
        );
    }
}

export default RouteMap;