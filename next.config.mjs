// @ts-check

/** @type {boolean} */
const isDev = process.env.NODE_ENV !== "production";

/** @type {import("next").NextConfig} */
const nextConfig = {
	output: "standalone",
	reactStrictMode: true,
	productionBrowserSourceMaps: true,

	async headers()
	{
		const cspPolicy = generateCspPolicy(isDev);

		return [
			{
				source: "/((?!api|_next/static|_next/image|favicon.ico|clarity.js|icon.svg).*)",
				headers:
					[
						{ key: "Content-Security-Policy", value: cspPolicy },
						{ key: "X-Content-Security-Policy", value: cspPolicy },
						{ key: "X-WebKit-CSP", value: cspPolicy },
						{ key: "Referrer-Policy", value: "no-referrer" },
						{ key: "X-Content-Type-Options", value: "nosniff" },
						{ key: "X-Frame-Options", value: "DENY" },
						{ key: "X-XSS-Protection", value: "1; mode=block" },
					]
			}
		];
	}
};

/**
 * @param {boolean} isDev
 * @returns {string}
 */
function generateCspPolicy(isDev)
{
	const csp =
	{
		"base-uri": "'none'",
		"child-src": "'none'",
		"connect-src": "'self' https://*.clarity.ms https://c.bing.com",
		"default-src": "'self'",
		"font-src": "'self'",
		"form-action": "'self'",
		"frame-ancestors": "'none'",
		"frame-src": "https://*.cloudflare.com",
		"img-src": "'self'",
		"manifest-src": "'self'",
		"media-src": "'self'",
		"object-src": "'none'",
		"script-src": "'self' https://*.clarity.ms https://c.bing.com https://*.cloudflare.com 'unsafe-inline'",
		"style-src": "'self' 'unsafe-inline'",
		"worker-src": "'self'"
	};

	if (isDev)
	{
		csp["connect-src"] = [csp["connect-src"].trim(), "webpack://*"].join(" ");
		csp["script-src"] = [csp["script-src"].trim(), "'unsafe-eval'"].join(" ");
	}

	return Object.entries(csp).map(i => i.join(" ")).join(";");
}

export default nextConfig;
