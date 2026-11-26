import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		agentFeedback: true
	},
	cacheComponents: true,
	partialPrefetching: true,
	reactStrictMode: true,
	output: "standalone",

	sassOptions: {},

	env: {
		NEXT_PUBLIC_BUILD_YEAR: new Date().getFullYear().toString()
	},

	turbopack: {
		rules: {
			"*.svg": {
				condition: {
					all: [{ path: /node_modules[\\/]@fluentui[\\/]svg-icons[\\/]/ }, { not: { query: /\?url$/ } }]
				},
				as: "*.js",
				loaders: [
					{
						loader: "@svgr/webpack",
						options: {
							icon: true,
							expandProps: true,
							svgoConfig: {
								plugins: [
									{
										name: "preset-default",
										params: {
											overrides: {
												cleanupIds: true,
												removeViewBox: false
											}
										}
									}
								]
							}
						}
					}
				]
			}
		}
	}
};

export default nextConfig;
