import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <div>
            <ul className='nav-bar'>
            <li>
                <ul className='nav-bar-left'>
                <li className='logo'>Robin's Hood</li>
                <li>Products</li>
                <li>Learn</li>
                <li>Support</li>
                </ul>
            </li>
            <li>
                <ul className='nav-bar-right'>
                <li><Link to="/login"><button>Sign In</button></Link></li>
                <li><Link to="/signup"><button>Sign Up </button></Link></li>
                <li><button onClick={() => this.props.login({ email: "amandayhuang@gmail.com", password: "password" })}>Demo Login</button></li>
                </ul>
            </li>
            </ul>
            </div>
            </>
        )
    }
}

export default NavBar;