import { MetadataRoute } from "next";
import { canonicalName } from "./_data/metadata";

export default function robots(): MetadataRoute.Robots
{
	return {
		rules: {
			userAgent: "*",
			allow: [ "/$", "/resume" ],
			disallow: [ "/resume/download", "/" ],
		},
		sitemap: new URL("/sitemap.xml", canonicalName.href).href,
	};
}
