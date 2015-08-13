import React from 'react';
import Reflux from 'reflux';

import CategoryList from './component/_category-list.js';
import CategoryListDomainAction from './store/category-list-domain-action.js';
import CategoryListDomainStore from './store/category-list-domain-store.js';

export default React.createClass({
    mixins: [Reflux.connect(CategoryListDomainStore, 'categories')],

    componentDidMount() {
        CategoryListDomainAction.load();
    },

    render() {
        return (
            <div>
                <h1>Categories</h1>

                <CategoryList categories={this.state.categories} />
            </div>
        );
    }
});
