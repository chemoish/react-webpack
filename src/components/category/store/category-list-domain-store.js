import _ from 'lodash';
import Reflux from 'reflux';
import Request from 'superagent';

import config from 'config';
import CategoryListDomainAction from './category-list-domain-action.js';

export default Reflux.createStore({
    listenables: [CategoryListDomainAction],

    init() {
        this.listenTo(CategoryListDomainAction.load, this.fetch);
    },

    getInitialState() {
        return [];
    },

    fetch() {
        Request
            .get(config.api_domain_uri + '/categories')
            .set({
                'api-version': config.api_version,
                device: config.api_device
            })
            .end(function (err, res) {
                let data = res.body.categories;

                _.each(data, function (value, index, list) {
                    let images = {};

                    _.each(value.tiles, function (value, key, list) {
                        images[value.device] = value;
                    });

                    value.images = images;
                });

                this.trigger(data);
            }.bind(this));
    }
});
