const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, './public/js/'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'inline-source-map'
});