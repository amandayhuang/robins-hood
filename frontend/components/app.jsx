import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import NavBarContainer from './nav_bar_container';
import NavBarContainerAuth from './nav_bar_auth_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute,ProtectedRoute} from '../util/route_util'
import StockShowContainer from './stock_show_container'
import Footer from './footer'
import PortfolioContainer from './portfolio_container'

const App = () => {
    return(
    <div>
        <ProtectedRoute path='/stocks' component={NavBarContainerAuth} />
        <ProtectedRoute exact path='/me' component={NavBarContainerAuth} />
        <ProtectedRoute exact path='/me' component= {PortfolioContainer} />
        <ProtectedRoute path='/stocks/:stockId' component={StockShowContainer}/>
        

        <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute exact path='/' component={NavBarContainer} />
            
        </Switch>

        {/* <Route path="/" component={Footer} /> */}
    </div>
    );
};

export default App;
