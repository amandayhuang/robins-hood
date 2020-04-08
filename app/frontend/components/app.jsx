import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import NavBarContainer from './nav_bar_container';
import NavBarContainerAuth from './nav_bar_auth_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute,ProtectedRoute} from '../util/route_util'

const App = () => {
    return(
    <div>
        
        <ProtectedRoute exact path='/me' component={NavBarContainerAuth} />
        
        <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute exact path='/' component={NavBarContainer} />
            
        </Switch>
    </div>
    );
};

export default App;
