var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'jquery',
            'react'
        ],

        app: './src/app.js',
        pageHome: './src/components/home.js',
        pageSetting: './src/components/setting.js'
    },

    output: {
        filename: '[name].js',
        path: 'build'
    },

    module: {
        loaders: [{
            loader: 'jsx-loader',
            test: /\.js$/
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js', [
            'app',
            'home',
            'setting'
        ]),

        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ]
};
