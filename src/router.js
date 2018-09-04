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
import Message from './pages/ui/ui/message'
import Gallery from './pages/ui/ui/gallery'
import Carousel from './pages/ui/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import Tabs from './pages/ui/ui/tabs'
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
                                <Route path="/admin/ui/messages" component={Message}/>
                                <Route path="/admin/ui/tabs" component={Tabs}/>
                                <Route path="/admin/ui/gallery" component={Gallery}/>
                                <Route path="/admin/ui/carousel" component={Carousel}/>
                                <Route path="/admin/form/login" component={FormLogin}/>
                                <Route path="/admin/form/reg" component={FormRegister}/>
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