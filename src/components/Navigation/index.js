import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styles from "./navigation.module.scss"

import w_icon from "../../assets/images/windows_icon.png"
import fb_icon from "../../assets/images/fb_icon.png"
import gm_icon from "../../assets/images/gm_icon.png"

class Navigation extends Component {
    render() {
        return (
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={w_icon} alt="windows_icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/fb">
                            <img src={fb_icon} alt="facebook_icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gm">
                            <img src={gm_icon} alt="gmail_icon"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
