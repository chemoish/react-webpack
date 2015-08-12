var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'jquery',
            'react'
        ],

        app: [
            'webpack/hot/only-dev-server',
            './src/app.js'
        ],

        // pageHome: './src/components/Home.js',
        // pageSetting: './src/components/Setting.js'
    },

    output: {
        filename: '[name].js',
        path: 'build'
    },

    module: {
        loaders: [{
            loader: 'style-loader!css-loader',
            test: /\.css$/
        }, {
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.js$/
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js', [
            // 'app',
            // 'pageHome',
            // 'pageSetting'
        ], 2),

        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ]
};
