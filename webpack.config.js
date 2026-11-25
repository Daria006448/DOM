const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundel.js",
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader" ,"css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resours",
                generator: {
                    filename: "assets/[name][ext]",
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    devServer: {
        static: "./dist",
        port: 8080,
        open: true,
    },
};