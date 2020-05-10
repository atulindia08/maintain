import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Navbar from "../components/common/navBar/nav";
import Login from "../components/common/modals/login";
import Signup from "../components/common/modals/signUp";

class layOut extends Component {
    render() {
        return (
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path='/Login' component={Login}></Route>
                    <Route exact path='/Signup' component={Signup}></Route>
                </Switch>
            </Router>
        );
    }
}

export default layOut;
