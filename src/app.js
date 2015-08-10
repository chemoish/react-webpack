var $ = require('jquery');
var React = require('react');

function resolveRoute() {
    if (location.hash === '#settings') {
        require.ensure([], function () {
            var Setting = require('./components/Setting.js');

            React.render(<Setting />, $('#main').get(0));
        });
    } else {
        require.ensure([], function () {
            console.log(this, arguments);

            var Home = require('./components/Home.js');

            React.render(<Home />, $('#main').get(0));
        });
    }
}

window.onhashchange = resolveRoute;

resolveRoute();

// var React = require('react');
//
// var App = require('./components/App.js');
//
// React.render(<App />, document.body);
