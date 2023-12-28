import Self from "../../../src";

module.exports = {
	entry: "./index.js",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [Self.loader, "css-loader"]
			}
		]
	},
	optimization: {
		chunkIds: "deterministic"
	},
	plugins: [
		new Self({
			filename: "[name].css",
			chunkFilename: "[id].[name].css"
		})
	]
};
