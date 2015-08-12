import $ from 'jquery';
import React from 'react';

import MovieList from '../movie/component/_movie-list.js';

export default React.createClass({
    componentDidMount: function () {
        let slug = this.props.params.slug;

        $.ajax({
            url: 'https://qa-api-domain.disneymoviesanywhere.com/domain/categories/' + slug,

            headers: {
                'api-version': '1.0',
                device: 'web'
            }
        })
            .success(function (data, textStatus, jqXHR) {
                this.setState({
                    movies: data.items
                });
            }.bind(this));
    },

    getInitialState: function () {
        return {
            movies: []
        };
    },

    render: function () {
        return (
            <div>
                <h1>Category</h1>

                <MovieList movies={this.state.movies} />
            </div>
        );
    }
});
