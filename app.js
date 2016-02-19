/**
 * Created by hanyajie on 16-2-19.
 */
require('././CSS/main.css');
require('././CSS/help_to_order.css');
var React = require('react');
var ReactDOM = require('react-dom');
var react_router = require('react-router');
var Router = react_router.Router;
var Route = react_router.Route;
var IndexRoute = react_router.IndexRoute;
var Main = require('./main');
var HelpToOrder = require('./help_to_order');
var routes = (
    <Router>
    <Route path="/" component={Main}/>
    <Route path="help_to_order" component={HelpToOrder}/>
    </Router>
);
ReactDOM.render(routes, document.getElementById('root'));