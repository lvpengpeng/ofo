import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './App'
import Login from './pages/login'
import Order from './pages/order'
import Admin from './admin'
import Buttons from './pages/ui/ui'
import Modals from './pages/ui/ui/modals'
import Loadings from './pages/ui/ui/loading'
import Nomatch from './pages/nomatch'
import Notice from './pages/ui/ui/notice'
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
                                <Route path="/admin/ui/loadings" component={Loadings}/>
                                <Route path="/admin/ui/notification" component={Notice}/>
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