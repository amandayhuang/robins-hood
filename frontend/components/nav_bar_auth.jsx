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
                                <img className='logo-black-auth' src={window.logoBlackURL} alt="robins hood logo" />
                            </li>

                            <li>
                                <div className="search">
                                    {/* <i className="fa fa-search"></i> */}
                                 <input className='search-input' placeholder="Search" type="text"/>
                                </div>
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className='nav-auth-bar-right'>
                            <div className='dropdown-trigger'>
                                <li className='account'>Account</li>
                                <div className='dropdown-items'>
                                    <ul>
                                        <li> {this.props.currentUser.first_name} {this.props.currentUser.last_name} </li>
                                        <li> <button onClick={this.props.logout}>Log Out</button></li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </li>
                </ul>
            </>
        )
    }
}

export default NavBarAuth;