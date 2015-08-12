import $ from 'jquery';
import React from 'react';
import Router from 'react-router';

var {DefaultRoute, Link, Route, RouteHandler} = Router;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="setting">Settings</Link></li>
                    </ul>
                </header>

                <h1>Look Ma—I am an app</h1>

                <RouteHandler />
            </div>
        );
    }
});

Router.run((
    <Route path="/" handler={App}>
        <DefaultRoute handler={require('react-router-proxy!./components/home/Home.js')}></DefaultRoute>

        <Route name="home" handler={require('react-router-proxy!./components/home/Home.js')}></Route>
        <Route name="setting" path="settings" handler={require('react-router-proxy!./components/setting/Setting.js')}></Route>
    </Route>
), function (Handler) {
    React.render(<Handler />, document.body);
});
