const Self = require("../../../").default;

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
							publicPath: "https://webpack.js.org/foo/../"
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
	],
	experiments: {
		css: false,
		rspackFuture: {
			newTreeshaking: true
		}
	}
};
