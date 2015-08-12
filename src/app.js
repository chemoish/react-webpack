import $ from 'jquery';
import React from 'react';

function resolveRoute() {
    if (location.hash === '#settings') {
        require.ensure([], function () {
            var Setting = require('./components/setting/Setting.js');

            React.render(<Setting />, $('#main').get(0));
        });
    } else {
        require.ensure([], function () {
            var Home = require('./components/home/Home.js');

            React.render(<Home />, $('#main').get(0));
        });
    }
}

window.onhashchange = resolveRoute;

resolveRoute();
