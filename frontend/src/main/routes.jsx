import React from "react";
import { Router , hashHistory, Route, Redirect } from "react-router";
import about from "../about/about";
import Todo from "../todo/todo";

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}/>
        <Route path='/about' component={about}/>
        <Redirect from="*" to='/todos'/>
    </Router>
)