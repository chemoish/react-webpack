import $ from 'jquery';
import React from 'react';
import Router from 'react-router';

var {Link} = Router;

export default React.createClass({
    render: function () {
        let movie = this.props.movie;

        return (
            <Link className="movie" to="movie" params={{slug: movie.seoTitle}}>
                <div className="movie-image">
                    <img src={movie.imageUrl} />
                </div>

                <span className="movie-title">{movie.title}!</span>
            </Link>
        );
    }
});
