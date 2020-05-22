const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const NodemonPlugin = require('nodemon-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        new NodemonPlugin(),
        new CleanWebpackPlugin()
    ],
    mode: 'development'
});