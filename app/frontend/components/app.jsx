import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from './signup_form_container'

const App = ({ children }) => (
    <div>
        <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <Route path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;
