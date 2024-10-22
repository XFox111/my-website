import { MetadataRoute } from "next";
import { unstable_noStore } from "next/cache";
import { canonicalName } from "./_data/metadata";

export default function robots(): MetadataRoute.Robots
{
	unstable_noStore();
	return {
		rules: {
			userAgent: "*",
			allow: [ "/$", "/resume", "/sitemap.xml" ],
			disallow: [ "/resume/download", "/" ],
		},
		sitemap: new URL("/sitemap.xml", canonicalName.href).href,
	};
}
