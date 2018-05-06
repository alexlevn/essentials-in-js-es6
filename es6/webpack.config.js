module.exports = {
    entry: ['./app/index.js'],
    mode: "development",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test:/\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer:{
        port: 3000,
        contentBase: "./build",
        inline: true
    }
}