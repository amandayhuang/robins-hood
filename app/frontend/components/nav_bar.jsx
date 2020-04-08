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
                <li>
                    <Link to="/"><img className='logo-black' src={window.logoBlackURL} alt="robins hood logo"/></Link>
                </li>
                {/* <li>Products <span>^</span></li>
                <li>Learn</li>
                <li>Support</li> */}
                </ul>
            </li>
            <li>
                <ul className='nav-bar-right'>
                <li><Link to="/login"><button>Sign In</button></Link></li>
                <li><Link to="/signup"><button>Sign Up </button></Link></li>
                <li><button className='demo-login' onClick={() => this.props.login({ email: "amandayhuang@gmail.com", password: "password" })}>Demo Login</button></li>
                </ul>
            </li>
            </ul>
            </div>

            <div className="home-1">
                <div className="home-1-left">
                <h1>It's Time to Do Gossip</h1>
                <h3>Robin's Hood, a pioneer of spilling the tea, gives you more ways to make your money work pettier.</h3>
                <Link to="/signup"><button>Sign Up </button></Link>
                </div>

                <div className="home-1-right">
                <img src={window.home1URL} alt="phone"/>
                </div>
            </div>
            </>
        )
    }
}

export default NavBar;