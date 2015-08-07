var $ = require('jquery');
var React = require('react');

var Shared = require('./Shared.js');

module.exports = React.createClass({
    render: function () {
        return (
            <h1>Settings</h1>
        );
    }
});

React.render(<Home />, $('#main').get(0));
