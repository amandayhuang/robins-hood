import React from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';

class NavBarAuth extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass(e) {
        const account = ReactDOM.findDOMNode(this.refs.account);
        account.classList.toggle('active-account');

        const menu = ReactDOM.findDOMNode(this.refs.menu);
        menu.classList.toggle('active-menu');
    }

    render() {
        return (
            <>
            
           
                <ul className='nav-auth-bar'>
                    <li>
                        <ul className='nav-auth-bar-left'>
                            <li>
                                {/* <img className='logo-black-auth' src={window.logoBlackURL} alt="robins hood logo" />
                                 */}
                                <Link to='/'><i class="far fa-laugh-wink nav-auth-logo"></i> </Link>
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
                            <li className='portfolio'><Link to='/'> Portfolio</Link></li>
                            <div className='dropdown-trigger'>    
                                <li onClick={this.toggleClass} className='account' ref="account">Account</li>
                                <div className='dropdown-items' ref="menu">
                                    <ul>
                                        <li> {this.props.currentUser.first_name} {this.props.currentUser.last_name} </li>
                                        <li> <button onClick={this.props.logout}>Log Out</button></li>
                                        <li> <Link to='/stocks/JX'>Sample Stock</Link></li>
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