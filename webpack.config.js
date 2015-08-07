module.exports = {
    entry: [
        './src/app.js'
    ],

    output: {
        filename: 'bundle.js',
        path: './build'
    },

    module: {
        loaders: [{
            loader: 'jsx-loader',
            test: /\.js$/
        }]
    }
};
