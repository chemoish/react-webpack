import React from 'react';
import Router from 'react-router';

var {Link} = Router;

export default React.createClass({
    render() {
        let category = this.props.category;

        return (
            <Link className="category" to="category" params={{slug: category.category}}>
                <div className="category-image">
                    <img src={category.images.web.url} />
                </div>

                <span className="category-title">{category.title}!</span>
            </Link>
        );
    }
});
