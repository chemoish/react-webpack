import $ from 'jquery';
import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div className="movie">
                <div className="movie-image">
                    {/*<img src={this.props.image} />*/}
                </div>

                <span className="movie-title">{this.props.title}!</span>
            </div>
        );
    }
});
