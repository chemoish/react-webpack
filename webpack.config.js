var path = require('path');
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
            'react',
            'react-router',
            'reflux',
            'lodash'
        ],

        index: './src/index.html',

        app: './src/app.js'
    },

    output: {
        filename: '[name].js',
        path: './build',
        publicPath: '/'
    },

    resolve: {
        alias: {
            // set enviroment specific variables
            config: path.join(__dirname, 'config', process.env.ENVIRONMENT || 'development')
        }
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
        // sets environment specific flags
        new webpack.DefinePlugin({
            __DEV__: process.env.BUILD_DEV || 'true',
            __PRERELEASE__: process.env.BUILD_PRERELEASE || 'false'
        }),

        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
};
