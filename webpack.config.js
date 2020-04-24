const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/script.ts',
    devtool: 'inline-source-map',
    plugins: [
        new NodemonPlugin(),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    target: "node",
    externals: [NodeExternals()],
    mode: "development"
};

