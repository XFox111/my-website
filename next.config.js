// @ts-check

/** @type {import("next-safe").nextSafe} */
// @ts-ignore
const nextSafe = require("next-safe");

/** @type {boolean} */
const isDev = process.env.NODE_ENV !== "production";

/** @type {import("next").NextConfig} */
const nextConfig = {
	output: "standalone",
	reactStrictMode: true,
	productionBrowserSourceMaps: true,

	async headers()
	{
		return [
			{
				source: "/((?!api|_next/static|_next/image|favicon.ico|clarity.js|icon.svg).*)",
				headers: nextSafe({
					isDev: false,
					contentSecurityPolicy:
					{
						"script-src": isDev ?
							"'self' 'unsafe-inline' https://*.clarity.ms https://c.bing.com 'unsafe-eval'" :
							"'self' 'unsafe-inline' https://*.clarity.ms https://c.bing.com",

						"connect-src": isDev ?
							"'self' https://*.clarity.ms https://c.bing.com webpack://*" :
							"'self' https://*.clarity.ms https://c.bing.com",

						"style-src": "'self' 'unsafe-inline'",

						// @ts-ignore
						"prefetch-src": false
					},
					permissionsPolicy: false
				})
			}
		];
	}
};

module.exports = nextConfig;
