const path = require('path');
const NodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/server.ts',
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
    externals: [
        NodeExternals()
    ],
    target: 'node'
};
