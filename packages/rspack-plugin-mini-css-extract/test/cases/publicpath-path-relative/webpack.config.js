import Self from "../../../src";

module.exports = {
	entry: "./index.js",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: Self.loader,
						options: {
							publicPath: "/static/img/"
						}
					},
					"css-loader"
				]
			}
		]
	},
	plugins: [
		new Self({
			filename: "[name].css"
		})
	]
};
