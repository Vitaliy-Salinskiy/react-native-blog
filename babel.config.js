module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			"expo-router/babel",
			["@babel/plugin-transform-modules-commonjs", {
				"extensions": [".mjs"]
			}]
		],
	};
};
