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
                        <li><Link to="category-list">Category List</Link></li>
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
        <DefaultRoute handler={require('react-router-proxy!./components/home/home.js')}></DefaultRoute>

        <Route name="category" path="/category/:slug" handler={require('react-router-proxy!./components/category/category.js')}></Route>
        <Route name="category-list" path="/categories" handler={require('react-router-proxy!./components/category/category-list.js')}></Route>
        <Route name="home" handler={require('react-router-proxy!./components/home/home.js')}></Route>
        <Route name="movie" path="/movie/:slug" handler={require('react-router-proxy!./components/movie/movie.js')}></Route>
        <Route name="setting" path="settings" handler={require('react-router-proxy!./components/setting/setting.js')}></Route>
    </Route>
), Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.body);
});
