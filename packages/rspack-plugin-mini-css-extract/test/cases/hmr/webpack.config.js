import { HotModuleReplacementPlugin } from "@rspack/core";

import Self from "../../../src";

module.exports = {
	entry: "./index.css",
	mode: "development",
	devtool: false,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: Self.loader
					},
					"css-loader"
				]
			}
		]
	},
	devServer: { hot: true },
	plugins: [
		new HotModuleReplacementPlugin(),
		new Self({
			filename: "[name].css"
		})
	]
};
