const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: path.resolve(__dirname, './src/template.html')
        } )
    ],
    devtool: 'cheap-source-map'
}
