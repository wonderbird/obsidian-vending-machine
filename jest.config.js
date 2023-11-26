/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFiles: ["./jest.setup.ts"],

	transform: { "^.+.ts?$": "ts-jest" },
	testRegex: "(/tests)?/.*.(test|spec).(ts|tsx)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
