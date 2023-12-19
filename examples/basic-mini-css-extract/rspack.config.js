const rspack = require("@rspack/core");
const MiniCssExtractPlugin = require("@rspack/plugin-mini-css-extract").default;
/** @type {import('@rspack/cli').Configuration} */
const config = {
	mode: "production",
	entry: "./src/index.js",
	plugins: [
		new rspack.HtmlRspackPlugin({
			template: "./index.html"
		}),
		new MiniCssExtractPlugin({})
	],
	module: {
		rules: [
			{
				test: /\.css/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
		]
	},
	optimization: {
		moduleIds: "named",
		runtimeChunk: true
	},
	experiments: {
		css: false,
		rspackFuture: {
			newTreeshaking: true
		}
	}
};
module.exports = config;
