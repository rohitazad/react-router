import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import  "./_styles.scss";

class HeaderComponent extends Component{

    render(){
        
        return(
            <header className="header">
                <nav className="navSec">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/git-user">Fetch Git User</Link>
                        </li>
                        <li>
                            <Link to="/hacker-news">Hacker News</Link>
                        </li>
                        <li>
                            <Link to="/shopping-cart">Shopping Cart</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;