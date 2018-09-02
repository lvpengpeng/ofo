import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './App'
import Login from './pages/login'
import Order from './pages/order'
import Admin from './admin'
import Buttons from './pages/ui/ui'
import Modals from './pages/ui/ui/modals'
import Nomatch from './pages/nomatch'
export default class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route exact path="/" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/ui/modals" component={Modals}/>
                                <Route component={Nomatch}/>
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/order" component={Order}/>
                </App>
            </HashRouter>
        )
    }
}