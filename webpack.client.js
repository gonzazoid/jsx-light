const BundleTracker = require('webpack-bundle-tracker');
const webpack = require('webpack');

const config = {
    context: __dirname
   ,entry: {
        elements: [
            './src/client/index.ts'
        ]
    }
   ,output: {
        path: __dirname + '/build/'
       ,pathinfo: true
       ,filename: '[name].js'
    }
   ,devtool: 'source-map'
   ,resolve: {
        extensions: ['', '.tsx', 'index.tsx', '.ts', 'index.ts', 'index.js', '.js']
       ,modulesDirectories: ['node_modules']
    }
   ,plugins: [
        new webpack.NoErrorsPlugin()
       ,new BundleTracker({filename:'./build/webpack-stats.json'})
    ]
   ,tslint: {
        emitErrors: true
       ,failOnHint: true
    }
   ,module: {
        preLoaders: [
            {test: /\.tsx?$/, loader: "tslint"}
        ]
       ,loaders: [
            {test: /\.tsx?$/, loader: 'ts'}
        ]
    }
};

module.exports = config;
