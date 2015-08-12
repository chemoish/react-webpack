import $ from 'jquery';
import React from 'react';

import Movie from './_movie.js';

export default React.createClass({
    render: function () {
        let movies = [];

        this.props.movies.forEach(function (movie, index, list) {
            movies.push(
                <li key={movie.guid}>
                    <Movie movie={movie} />
                </li>
            );
        });

        return (
            <ul className="movie-list">
                {movies}
            </ul>
        );
    }
});
