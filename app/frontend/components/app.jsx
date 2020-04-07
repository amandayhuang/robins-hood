import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import NavBarContainer from './nav_bar_container';
import NavBarContainerAuth from './nav_bar_auth_container';
import LoginFormContainer from './login_form_container';

const App = () => {
    return(
    <div>
        <NavBarContainer/>
        <NavBarContainerAuth />
        <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <Route path="/signup" component={SignupFormContainer} />
            <Route path="/login" component={LoginFormContainer} />
        </Switch>
    </div>
    );
};

export default App;
