import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from "./_styles.scss";

class HeaderComponent extends Component{

    render(){
        
        return(
            <header className={styles.header}>
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
                </ul>
            </header>
        );
    }
}

export default HeaderComponent;