/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
const config = {
	testEnvironment: "../../scripts/test/patch-node-env.cjs",
	testMatch: [
		"<rootDir>/test/*.test.js",
		"<rootDir>/test/*.basictest.js",
		"<rootDir>/test/*.longtest.js",
		"<rootDir>/test/*.unittest.js"
	],
	testTimeout: process.env.CI ? 60000 : 30000,
	cache: false,
	transform: {
		"^.+\\.(t|j)sx?$": "@swc/jest"
	},
	globals: {
		"ts-jest": {
			tsconfig: "<rootDir>/tests/tsconfig.json"
		}
	}
};

module.exports = config;
