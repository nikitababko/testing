const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, "src", "public"),
        watchContentBase: true,
        compress: true,
        host: "localhost",
        port: 3000,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    watch: true,
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: "[name].[ext]"
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    "css-hot-loader",
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { sourceMap: true, url: false } },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: {
                                path: "webpack/postcss.config.js"
                            }
                        }
                    },
                    { loader: "sass-loader", options: { sourceMap: true } }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    "css-hot-loader",
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { sourceMap: true } },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: {
                                path: "webpack/postcss.config.js"
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html"
        }),
        new MiniCssExtractPlugin({
            path: path.join(__dirname, "build"),
            filename: "[name].css"
        }),
        new CopyPlugin([
            { from: "./src/public/img", to: "./img/" },
            { from: "./src/public/fonts", to: "./fonts/" }
        ])
    ]
};
