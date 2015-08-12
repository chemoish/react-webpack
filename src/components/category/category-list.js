import $ from 'jquery';
import React from 'react';

import CategoryList from '../category/component/_category-list.js';

export default React.createClass({
    componentDidMount: function () {
        $.ajax({
            url: 'https://qa-api-domain.disneymoviesanywhere.com/domain/categories',

            headers: {
                'api-version': '1.0',
                device: 'web'
            }
        })
            .success(function (data, textStatus, jqXHR) {
                this.setState({
                    categories: data.categories
                });
            }.bind(this));
    },

    getInitialState: function () {
        return {
            categories: []
        };
    },

    render: function () {
        return (
            <div>
                <h1>Categories</h1>

                <CategoryList categories={this.state.categories} />
            </div>
        );
    }
});
