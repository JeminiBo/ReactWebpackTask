var path = require('path');

module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }]
            },
            {
                test: /\.css?$/,
                use: [{ loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            }
        ]
    }
}