import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
	recommendedConfig: js.configs.recommended
});

const eslintConfig =
	[
		...compat.config({
			extends: ["eslint:recommended", "next/core-web-vitals", "next/typescript"],
			rules:
			{
				"@typescript-eslint/no-explicit-any": ["off"],
				"@typescript-eslint/no-unused-vars": ["warn"],
				"indent": [
					"warn",
					"tab",
					{
						"SwitchCase": 1
					}
				],
				"quotes": [
					"error",
					"double"
				],
				"semi": [
					"error",
					"always"
				],
			}
		})
	];

export default eslintConfig;
