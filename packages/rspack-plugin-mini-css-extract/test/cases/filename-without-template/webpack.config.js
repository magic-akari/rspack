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
	optimization: { chunkIds: "named" },
	plugins: [
		new Self({
			filename: "main.css"
		})
	]
};
