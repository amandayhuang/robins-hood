import React from 'react';
import { Link } from "react-router-dom";

class NavBarAuth extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            
           
                <ul className='nav-auth-bar'>
                    <li>
                        <ul className='nav-auth-bar-left'>
                            <li>
                                <img className='logo-black' src={window.logoWhiteURL} alt="robins hood logo" />
                            </li>

                            <li>
                                <div className="search">
                                    <input placeholder="Search" type="text"/>
                                </div>
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className='nav-auth-bar-right'>
                            <li>Account</li>
                            <li> {this.props.currentUser.first_name}</li>
                            <li><button onClick={this.props.logout}>Logout</button></li>
                        </ul>
                    </li>
                </ul>
            </>
        )
    }
}

export default NavBarAuth;