// @ts-check

/** @type {import("next").NextConfig} */
const nextConfig = {
	output: "standalone",
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	async headers()
	{
		return [
			{
				source: "/(.*)",
				headers:
				[
					{
						key: "Content-Security-Policy",
						value: "default-src 'self' https://*.clarity.ms https://c.bing.com 'unsafe-inline';"
					}
				]
			}
		];
	}
};

export default nextConfig;
