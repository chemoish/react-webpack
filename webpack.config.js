var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'jquery',
            'react'
        ],

        index: './src/index.html',

        app: './src/app.js',

        pageHome: './src/components/home/Home.js',
        pageSetting: './src/components/setting/Setting.js'
    },

    output: {
        filename: '[name].js',
        path: 'build'
    },

    module: {
        loaders: [{
            loader: 'style-loader!css-loader',
            test:   /\.css$/
        }, {
            exclude: /node_modules/,
            loaders: [
                'react-hot',
                'babel-loader'
            ],
            test: /\.js$/
        }, {
            loader: 'file?name=[name].[ext]',
            test:   /\.html$/,
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js', [
            'app',
            'pageHome',
            'pageSetting'
        ], 2),

        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ]
};
