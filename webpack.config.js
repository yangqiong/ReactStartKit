const DEBUG = !process.argv.includes('--release');

module.exports = {
    entry: "./src/client.js",
    output: {
        path: "./src",
        filename: DEBUG ? "client.min.js" : "client.[hash].js"
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