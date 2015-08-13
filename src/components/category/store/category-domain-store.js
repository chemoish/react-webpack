import Reflux from 'reflux';
import Request from 'superagent';

import config from 'config';
import CategoryDomainAction from './category-domain-action';

export default Reflux.createStore({
    listenables: [CategoryDomainAction],

    init() {
        this.listenTo(CategoryDomainAction.load, this.fetch);
    },

    getInitialState() {
        return {
            items: []
        };
    },

    fetch(slug) {
        Request
            .get(config.api_domain_uri + '/categories/' + slug)
            .set({
                'api-version': config.api_version,
                device: config.api_device
            })
            .end(function (err, res) {
                let data = res.body;

                data.heroes = _.reduce(data.heroes, function (result, value, key) {
                    result[value.device] = value;

                    return result;
                }, {});

                this.trigger(data);
            }.bind(this));
    }
});
