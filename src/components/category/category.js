import React from 'react';
import Reflux from 'reflux';

import CategoryDomainAction from './store/category-domain-action';
import CategoryDomainStore from './store/category-domain-store.js';
import MovieList from '../movie/component/_movie-list.js';

export default React.createClass({
    mixins: [Reflux.connect(CategoryDomainStore)],

    componentDidMount() {
        let slug = this.props.params.slug;

        CategoryDomainAction.load(slug);
    },

    render() {
        return (
            <div>
                <h1>Category</h1>

                <MovieList movies={this.state.items} />
            </div>
        );
    }
});
