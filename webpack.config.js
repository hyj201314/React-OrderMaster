/**
 * Created by hanyajie on 16-2-19.
 */
require('es6-promise').polyfill()
var webpack = require('webpack');
module.exports = {
    entry: './app.js',
    output: {
        path: __dirname, // 输出文件的保存路径
        filename: 'bundle.js' // 输出文件的名称
    },
    watch: true,
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets:['react']}}
        ]
    }
};