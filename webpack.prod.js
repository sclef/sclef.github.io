const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    mode: 'production',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['public/js/'])
    ]
});