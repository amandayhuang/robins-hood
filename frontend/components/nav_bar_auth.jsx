import React from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import * as PortfolioUtil from '../util/portfolio_util';

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

    componentDidMount(){
        this.props.fetchTrades(this.props.currentUser.id);
        this.props.fetchBalanceChanges(this.props.currentUser.id);
        this.props.fetchWatches(this.props.currentUser.id);

        const allStocks = this.props.currentUser.owned_stock_ids.concat(this.props.currentUser.watched_stock_ids);
        // debugger
        //get stocks trends
        for (let i = 0; i < allStocks.length; i++) {
            const tickerName = allStocks[i];
            const found = this.props.trends[tickerName];
            if (found === undefined) {
                this.props.fetchStock(tickerName);
                this.props.getTrends(tickerName);
            }
        }
    }


    render() {
        let endDate = new Date;
        let cash = PortfolioUtil.getCashFromBalanceChange(this.props.balance_changes, endDate);
        let watchSummary = PortfolioUtil.getWatchSummaryFromWatches(this.props.watches,this.props.trends);
        let stockSummary = PortfolioUtil.getStockSummaryFromTrades(this.props.trades, this.props.trends, new Date);
        let stockValue = PortfolioUtil.getPortfolioValue(Object.values(stockSummary));

        return (
            <>
                <ul className='nav-auth-bar'>
                    <li>
                        <ul className='nav-auth-bar-left'>
                            <li>
                                {/* <img className='logo-black-auth' src={window.logoBlackURL} alt="robins hood logo" />
                                 */}
                                <Link to='/portfolio'><i className="far fa-laugh-wink nav-auth-logo"></i> </Link>
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
                            <li className='portfolio'><Link to='/portfolio'> Portfolio</Link></li>
                            <div className='dropdown-trigger'>    
                                <li onClick={this.toggleClass} className='account' ref="account">Account</li>
                                <div className='dropdown-items' ref="menu">
                                    <ul>
                                        <li> {this.props.currentUser.first_name} {this.props.currentUser.last_name} </li>
                                        
                                        <li>
                                        <div className="nav-stats">
                                                <div>  <div>${(cash + stockValue).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</div> <span className="lighter">Portfolio Value</span></div>
                                                <div> <div>${cash.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </div> <span className="lighter">Buying Power</span> </div>
                                        </div>
                                        </li>
                                        <li><i className="fas fa-sign-out-alt"></i><button onClick={this.props.logout}>Log Out</button></li>
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