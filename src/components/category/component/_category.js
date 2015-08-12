import $ from 'jquery';
import React from 'react';
import Router from 'react-router';

var {Link} = Router;

export default React.createClass({
    render: function () {
        let category = this.props.category;

        return (
            <Link className="category" to="category" params={{slug: category.category}}>
                <div className="category-image">
                    <img src={category.tiles[0].url} />
                </div>

                <span className="category-title">{category.title}!</span>
            </Link>
        );
    }
});
