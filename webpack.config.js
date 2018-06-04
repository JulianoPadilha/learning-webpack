// The path module provides utilities for working with file and directory paths.
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		filename: "./src/app.js"
	},
	output: {
		filename: "bundle.js",
		// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
		path: path.resolve(__dirname, "./build")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: "/node_modules/"
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				],
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: "file-loader"
					}
				]
			}
		],
	},
	plugins: [
		new UglifyJsPlugin()
	],
	devServer: {
		port: 3000
	}
};