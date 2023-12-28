import Self from "../../../src";

module.exports = {
	entry: "./index.js",
	mode: "production",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [Self.loader, "css-loader"]
			}
		]
	},
	output: {
		filename: "[name].[contenthash].js"
	},
	plugins: [
		new Self({
			filename: "[name].[contenthash].css"
		})
	]
};
