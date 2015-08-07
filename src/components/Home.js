var $ = require('jquery');
var React = require('react');

var Shared = require('./Shared.js');

var Home = React.createClass({
    render: function () {
        return (
            <h1>Home</h1>
        );
    }
});

React.render(<Home />, $('#main').get(0));
