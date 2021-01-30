import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./home";
import Navigation from "../components/Navigation";
import "../styles/index.scss"
import Facebook from "./facebook/facebook";

class Routing extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/fb" component={Facebook} />
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Navigation />
            </Router>
        );
    }
}

export default Routing;
