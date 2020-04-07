import React from 'react';
import NavBarContainer from './nav_bar_container'
import { Link } from "react-router-dom";


class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // debugger
        return(
            <>
            <h1>User {this.props.currentUser.email}</h1>
            <button onClick={this.props.logout}>Logout</button>
            <Link to="/signup">Signup </Link>
            <Link to="/login">Login</Link>
            <button onClick={() => this.props.login({ email: "amandayhuang@gmail.com", password: "password" })}>Demo Login</button>
            </>
        )
    }
}

export default NavBar;