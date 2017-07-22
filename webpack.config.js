const webpack = require('webpack')
const join = require('path').join

const product = process.env.BABEL_ENV === 'product'

let filename = 'Dcal.min.js';
let path = join(__dirname, 'dist');
const plugins = []
const uglify = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, drop_console: true } })

const config = {
    context: __dirname,
    entry: join(__dirname, 'src', 'Dcal.js'),
    output: {
        path: path,
        filename: filename,
        library: 'Dcal',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [uglify],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { // 参数
                    presets: ['es2015', 'stage-2'],
                    plugins: ['transform-runtime'],
                }
            }
        ]
    },
}

module.exports = config
