import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './App'
import Login from './pages/login'
import Order from './pages/order'
import Admin from './admin'
export default class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/" component={Login}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/order" component={Order}/>
                </App>
            </HashRouter>
        )
    }
}