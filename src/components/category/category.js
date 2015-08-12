import $ from 'jquery';
import React from 'react';

import MovieList from '../movie/component/_movie-list.js';

export default React.createClass({
    componentDidMount: function () {
        $.ajax({
            url: 'https://qa-api-domain.disneymoviesanywhere.com/domain/categories',

            headers: {
                'api-version': '1.0',
                device: 'web'
            }
        });
    },

    render: function () {
        return (
            <div>
                <h1>Category</h1>

                <MovieList />
            </div>
        );
    }
});
