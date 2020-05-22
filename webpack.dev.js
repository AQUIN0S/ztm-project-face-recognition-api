const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const NodemonPlugin = require('nodemon-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        new NodemonPlugin(),
        new CleanWebpackPlugin()
    ],
    externals: [
        NodeExternals()
    ],
    mode: 'development'
});