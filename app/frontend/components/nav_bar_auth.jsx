import React from 'react';
import { Link } from "react-router-dom";

class NavBarAuth extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <h1>{this.props.currentUser.first_name}</h1>
            <button onClick={this.props.logout}>Logout</button>
            </>
        )
    }
}

export default NavBarAuth;