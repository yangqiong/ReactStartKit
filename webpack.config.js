module.exports = {
    entry: "./src/client.js",
    output: {
        path: "./src",
        filename: "client.min.js"
    },
    module: {
        loaders: [{
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
}