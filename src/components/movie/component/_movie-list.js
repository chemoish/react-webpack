import $ from 'jquery';
import React from 'react';

import Movie from './_movie.js';

export default React.createClass({
    render: function () {
        return (
            <ul className="movie-list">
                <li>
                    <Movie title="Toy Story" />
                </li>
            </ul>
        );
    }
});
