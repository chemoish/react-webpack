import $ from 'jquery';
import React from 'react';

import Category from './_category.js';

export default React.createClass({
    render: function () {
        let categories = [];

        this.props.categories.forEach(function (category, index, list) {
            categories.push(
                <li key={category.category}>
                    <Category category={category} />
                </li>
            );
        });

        return (
            <ul className="category-list">
                {categories}
            </ul>
        );
    }
});
