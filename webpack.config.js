var webpack = require('webpack');

module.exports = {
    devServer: {
        colors:             true,
        contentBase:        './build',
        historyApiFallback: true,
        inline:             true,
        progress:           true
    },

    entry: {
        vendor: [
            'jquery',
            'react'
        ],

        index: './src/index.html',

        app: './src/app.js'
    },

    output: {
        filename: '[name].js',
        path: './build',
        publicPath: '/'
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
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
};
