var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'jquery',
            'react'
        ],

        index: './src/index.html',

        app: [
            'webpack/hot/only-dev-server',
            './src/app.js'
        ],

        pageCategory: [
            'webpack/hot/only-dev-server',
            './src/components/category/category.js'
        ],
        pageCategoryList: [
            'webpack/hot/only-dev-server',
            './src/components/category/category-list.js'
        ],
        pageHome: [
            'webpack/hot/only-dev-server',
            './src/components/home/home.js'
        ],
        pageMovie: [
            'webpack/hot/only-dev-server',
            './src/components/movie/movie.js'
        ],
        pageSetting: [
            'webpack/hot/only-dev-server',
            './src/components/setting/setting.js'
        ]
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
            'pageCategory',
            'pageCategoryList',
            'pageHome',
            'pageMovie',
            'pageSetting'
        ], 2),

        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ]
};
