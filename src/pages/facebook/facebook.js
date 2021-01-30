import React, {Component} from 'react';
import {Link, Switch, Route} from "react-router-dom";
import styles from "./facebook.module.scss"
import FbProfile from "./fb_profiles";
import FbDirect from "./fb_direct";

class Facebook extends Component {
    constructor(props) {
        super(props);

        this.match = this.props.match
    }

    createRoute(path) {
        return `${this.match.url}/${path}`
    }

    render() {
        return (
            <div>
                <nav className={styles.nav}>
                    <h2 className={"text-center"}>Fakebook</h2>
                    <ul>
                        <li>
                            <Link to={this.createRoute('profile')}>Profile</Link>
                        </li>
                        <li>
                            <Link to={this.createRoute('direct')}>Direct Messages</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Switch>
                        <Route path={this.createRoute('profile')} component={FbProfile} />
                        <Route path={this.createRoute('direct')} component={FbDirect} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Facebook;
